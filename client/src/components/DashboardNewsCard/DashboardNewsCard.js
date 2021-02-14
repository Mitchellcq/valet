import React, { useState } from 'react';
import { useAppContext } from '../../store';
import { postSpace } from '../../utils/spaceApis';
import NumericInput from 'react-numeric-input';

import './style.css';
import LocationSearchInput from '../addressForm/AddressForm';

function DashboardNewsCard(props) {

    const [authState] = useAppContext();

    const userID = authState.user._id;
    console.log(userID);
    const [spaceFormState, setSpaceFormState] = useState({
        userID: userID,
        address: '',
        cost: '',
        // image: null,
    });

    function myFormat(num) {
        return '$' + num;
    }

    const eventhandler = (data) => {
        console.log(data);
        setSpaceFormState({ ...spaceFormState, address: data.address });

        console.log(spaceFormState);
    };

    const onChange = (e) => {
        console.log(e);
        setSpaceFormState({ ...spaceFormState, cost: e });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(spaceFormState);

        const space = {
            userID: spaceFormState.userID,
            address: spaceFormState.address,
            cost: spaceFormState.cost,
            // image: spaceFormState.image
        };
        try {
            const response = await postSpace(space);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="dashboardCard card cardBackground">
            <div className="card-body">
                <h1>Parking Space Submission form</h1>
                <form noValidate onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>
                            Address:
                    <LocationSearchInput
                                type="string"
                                className="form-control"
                                name="address"
                                onChange={eventhandler}
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Cost/hr:
                            <NumericInput
                                className="form-control"
                                name="cost"
                                precision={2}
                                value={spaceFormState.cost}
                                step={0.1}
                                format={myFormat}
                                onChange={onChange} />
                        </label>
                    </div>
                    <button type="submit" className="btn btn-lg btn-primary btn-block">
                        Submit
                    </button>
                </form>
            </div>
        </div>

    );
}

export default DashboardNewsCard;
