import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Map from '../Map/Map';
import map from './../../images/Map.png'
import './RiceDetails.css'

const RideDetails = () => {
    const params = useParams();

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 p-4 text-start rideSearchFild">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput" className="form-label">Pick From</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Mirpur-1" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput2" className="form-label">Pick To</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Gulshan-2" />
                        </div>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                <div className="col-md-8">
                    {/* <img src={map} style={{ height: "70%", width: "100%" }} alt="" /> */}
                    <Map></Map>
                </div>
            </div>
        </div>
    );
};

export default RideDetails;