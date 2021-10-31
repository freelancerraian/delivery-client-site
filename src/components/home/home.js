import React from 'react';
import Review from '../carosul/caroul';
import './home.css';
import Services from '../services/services';
import Wellcome from '../wellcome/wellcome';

const Home = () => {
    return (
      <div>
        <Wellcome></Wellcome>
        <Services></Services>
        <Review></Review>
      </div>
    );
};

export default Home;