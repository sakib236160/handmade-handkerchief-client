import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import HandmadeRumalCard from '../HandmadeRumalCard/HandmadeRumalCard';
import PopularPicks from '../PopularPicks/PopularPicks';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <HandmadeRumalCard></HandmadeRumalCard>
            <PopularPicks></PopularPicks>
        </div>
    );
};

export default Home;