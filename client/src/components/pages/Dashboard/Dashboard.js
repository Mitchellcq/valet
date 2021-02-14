import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import MapContainer from '../../map/Map';
import { useAppContext } from '../../../store';

function DashBoard() {
    const [state] = useAppContext();

    console.log({ state });

    return (
        <div className="pl-0 container-fluid">
            <Sidebar />
            <div>
                <h1>
                    Welcome {state.user.first_name} {state.user.last_name}
                </h1>
                <div className="mx-auto">
                    <MapContainer />
                </div>
            </div>
        </div>
    );
}

export default DashBoard;
