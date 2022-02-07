import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // console.log(loggedInUser);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link to="/">gO Riders</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="ride/:rideId" className="nav-link">Destination</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dashboard" className="nav-link">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Contact</Link>
                            </li>
                        </ul>
                        {
                            loggedInUser.email 
                            ? <button className="btn btn-warning">{loggedInUser.name}</button> 
                            : <Link to="/signup" className="btn btn-warning">Sign up</Link>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;