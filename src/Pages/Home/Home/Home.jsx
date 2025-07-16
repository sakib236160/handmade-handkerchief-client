import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import HandmadeRumalCard from '../HandmadeRumalCard/HandmadeRumalCard';
import PopularPicks from '../PopularPicks/PopularPicks';
import CellUs from '../CellUs/CellUs';
import Featured from '../Featured/Featured';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <HandmadeRumalCard></HandmadeRumalCard>
            <PopularPicks></PopularPicks>
            <CellUs></CellUs>
            <SectionTitle 
                    subHeading="Check it Out"
                    heading="Featured Rumal"
                ></SectionTitle>
            <Featured></Featured>
        </div>
    );
};

export default Home;