import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import HandmadeRumalCard from '../HandmadeRumalCard/HandmadeRumalCard';
import PopularPicks from '../PopularPicks/PopularPicks';
import CellUs from '../CellUs/CellUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <HandmadeRumalCard></HandmadeRumalCard>
            <PopularPicks></PopularPicks>
            <CellUs></CellUs>
        </div>
    );
};

export default Home;