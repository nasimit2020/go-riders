import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AllRides.css'

const AllRides = (props) => {
    const { id, rideName, imageURL } = props.ride;
    const navigate = useNavigate();
    const handleRideDetail = () => {
        navigate(`ride/${rideName}`)
    }
    return (
        <div className="col-md-6 col-lg-3 cardResponsive">
            <div className="card h-100 bg-info" >
                <img src={imageURL} className="card-img-top w-50 mx-auto d-block pt-2" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-danger">{rideName}</h5>
                    <button onClick={() => handleRideDetail()} className="btn btn-warning">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default AllRides;