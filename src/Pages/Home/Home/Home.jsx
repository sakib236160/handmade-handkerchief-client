import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import HandmadeRumalCard from '../HandmadeRumalCard/HandmadeRumalCard';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <HandmadeRumalCard></HandmadeRumalCard>
        </div>
    );
};

export default Home;