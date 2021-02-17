
import React, { Component } from 'react';
import isEmpty from 'lodash.isempty';

// components:
import Marker from '../map/Marker';
import { postSpace } from '../../utils/userApis';
import MultiSelect from "@khanacademy/react-multi-select";

// examples:
import GoogleMap from '../map/Map';
import AutoComplete from '../map/AutoComplete';

// consts
const Bondi = [-33.891716, 151.275783];
const options = [
    { label: " SUV/4WD", value: " SUV/4WD" },
    { label: " Van", value: " Van" },
    { label: " Sedan", value: " Sedan" },
    { label: " Compact", value: " Compact" },
    { label: " Motorcycle/Scooter", value: " Motorcycle/Scooter" },
];

class DashboardNewsCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mapApiLoaded: false,
            mapInstance: null,
            mapApi: null,
            places: [],
            cost: 0,
            types: [],
        };
    }

    apiHasLoaded = (map, maps) => {
        this.setState({
            mapApiLoaded: true,
            mapInstance: map,
            mapApi: maps,
        });
    };

    addPlace = (place) => {
        this.setState({ places: [place] });
        console.log(this.state.places);
    };

    handleCostChange = (e) => {
        e.preventDefault();
        this.setState({ cost: e.target.value })
        console.log(this.state.cost);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const space = {
            formatted_address: this.state.places[0].formatted_address,
            geometry: this.state.places[0].geometry,
            id: this.state.places[0].place_id,
            types: this.state.types,
            cost: this.state.cost
        };

        postSpace(space);
    }

    render() {
        const {
            places, mapApiLoaded, mapInstance, mapApi, types,
        } = this.state;
        return (
            <>
                {mapApiLoaded && (
                    <AutoComplete map={mapInstance} mapApi={mapApi} addplace={this.addPlace} />
                )}
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="form-control"
                        type="number"
                        onFocus={this.clearSearchBox}
                        onChange={this.handleCostChange}
                        placeholder="Name your Price"
                        value={this.state.cost}
                    />
                    <br />
                    <MultiSelect
                        options={options}
                        selected={types}
                        onSelectedChanged={types => { this.setState({ types }); console.log(this.state.types); }}
                    />
                    <br />
                </form>
                <br />
                <GoogleMap
                    defaultZoom={10}
                    defaultCenter={Bondi}
                    bootstrapURLKeys={{
                        key: process.env.REACT_APP_GOOGLE_API,
                        libraries: ['places', 'geometry'],
                    }}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)}
                >
                    {!isEmpty(places)
                        && places.map((place) => (
                            <Marker
                                key={place.id}
                                text={place.name}
                                lat={place.geometry.location.lat()}
                                lng={place.geometry.location.lng()}
                            />
                        ))}
                </GoogleMap>
            </>
        );
    }
}

export default DashboardNewsCard;