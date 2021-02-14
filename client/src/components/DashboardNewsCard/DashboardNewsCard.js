import React, { useState } from 'react';
import { useAppContext } from '../../store';
import { postSpace } from '../../utils/spaceApis';
import NumericInput from 'react-numeric-input';

import './style.css';
import LocationSearchInput from '../addressForm/AddressForm';

function DashboardNewsCard() {

    const [authState] = useAppContext();

    const [spaceFormState, setSpaceFormState] = useState({
        userID: '',
        address: '',
        cost: '',
        image: null,
    });

    function myFormat(num) {
        return '$' + num;
    }

    const userID = authState.user._id;

    const onChange = (e) => {
        e.preventDefault();
        setSpaceFormState({ ...spaceFormState, [e.target.name]: e.target.value });
        setSpaceFormState({ ...spaceFormState, userID: userID })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(spaceFormState);

        const space = {
            userID: spaceFormState.userID,
            address: spaceFormState.address,
            cost: spaceFormState.cost,
            image: spaceFormState.image
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
                                value={spaceFormState.address}
                                onChange={onChange}
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Cost/hr:
                            <NumericInput
                                className="form-control"
                                precision={2}
                                value={spaceFormState.cost}
                                step={0.1}
                                format={myFormat} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Image:
                            <input
                                type="file"
                                className="form-control"
                                name="image"
                                value={spaceFormState.image}
                                onChange={onChange}
                            />
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
