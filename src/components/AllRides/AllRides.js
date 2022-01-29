import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllRides = (props) => {
    const {id, rideName, imageURL } = props.ride;
    const navigate = useNavigate();
    const handleRideDetail = () =>{
        navigate(`ride/${rideName}`)
    }
    return (
       
            <div className="card float-start text-center me-2 bg-info" style={{ width: "271px", marginTop: "150px", height: "220px" }}>
                <img src={imageURL} className="card-img-top w-50 mx-auto d-block pt-2" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-danger">{rideName}</h5>
                    <button onClick={() => handleRideDetail()} className="btn btn-warning">Book Now</button>
                </div>
            </div>
    );
};

export default AllRides;