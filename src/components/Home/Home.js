import React from 'react';
import AllRides from '../AllRides/AllRides';
import fakedata from './../../fakeData.json'
import './Home.css'

const Home = () => {
    return (
        <div className="container bgStyle">
            {
                fakedata.map((ride, id) => <AllRides
                     ride={ride}
                     key={id}
                ></AllRides>)
            }
        </div>
    );
};

export default Home;