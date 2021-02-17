import React, { Component } from 'react';
import isEmpty from 'lodash.isempty';
// import axios from 'axios';

// components:
import GoogleMap from './Map';

// consts
const Bondi = [-33.891716, 151.275783];

// Return map bounds based on list of places
const getInfoWindowString = (place) => `
    <div>
      <div style="font-size: 16px;">
        ${place.formatted_address}
      </div>
      <div style="font-size: 14px;">
        <span style="color: grey;">
        ${place.rating}
        </span>
        <span style="color: orange;">${String.fromCharCode(9733).repeat(Math.floor(place.rating))}</span><span style="color: lightgrey;">${String.fromCharCode(9733).repeat(5 - Math.floor(place.rating))}</span>
      </div>
      <div style="font-size: 14px; color: grey;">
        ${place.types}
      </div>
      <div style="font-size: 14px; color: grey;">
        ${'$'.repeat(place.price_level)}
      </div>
      <div style="font-size: 14px; color: green;">
        ${place.open_now ? 'Open' : 'Closed'}
      </div>
    </div>`;

// Refer to https://github.com/google-map-react/google-map-react#use-google-maps-api
const handleApiLoaded = (map, maps, places) => {
    const markers = [];
    const infowindows = [];

    places.forEach((place) => {
        markers.push(new maps.Marker({
            position: {
                lat: place.geometry.location.lat,
                lng: place.geometry.location.lng,
            },
            map,
        }));

        infowindows.push(new maps.InfoWindow({
            content: getInfoWindowString(place),
        }));
    });

    markers.forEach((marker, i) => {
        marker.addListener('click', () => {
            infowindows[i].open(map, marker);
        });
    });
};

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            places: [],
        };
    }

    componentDidMount() {

        // axios.get('/api/getSpaces')
        //     .then((res) => {
        //         console.log(res);
        //         res.forEach((space) => {
        //             space.show = false;
        //         });
        //         this.setState({ places: res });
        //     });

        fetch('places.json')
            .then((response) => response.json())
            .then((data) => {
                data.parkingSpaces.forEach((space) => {
                    space.show = false; // eslint-disable-line no-param-reassign
                });
                this.setState({ places: data.parkingSpaces });
            });
    }

    render() {
        const { places } = this.state;

        return (
            <>
                {!isEmpty(places) && (
                    <GoogleMap
                        defaultZoom={16}
                        defaultCenter={Bondi}
                        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API }}
                        yesIWantToUseGoogleMapApiInternals
                        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps, places)}
                    />
                )}
            </>
        );
    }
}

export default Main;