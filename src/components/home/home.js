import React from 'react';
import Review from '../carosul/caroul';
import './home.css';
import Services from '../services/services'

const Home = () => {
    return (
      <div>
        <Services></Services>
        <Review></Review>
      </div>
    );
};

export default Home;