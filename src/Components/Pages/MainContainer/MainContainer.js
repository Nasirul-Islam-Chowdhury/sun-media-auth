import React from 'react';
import Footer from '../Home/Footer'
import AppreciatingAmountContainer from '../Home/AppreciatingAmountContainer';
import Home from '../Home/Home';
import OfferContainer from '../Home/OfferContainer';
import PhilosophyContainer from '../Home/PhilosophyContainer';
import Schedule from '../Home/Schedule';
import TeamContainer from '../Home/TeamContainer';
const MainContainer = () => {
    return (
        <div>
            <Home></Home>
            <AppreciatingAmountContainer></AppreciatingAmountContainer>
            <PhilosophyContainer></PhilosophyContainer>
            <OfferContainer></OfferContainer>
            <TeamContainer></TeamContainer>
            <Schedule></Schedule>
            <Footer></Footer>
        </div>
    );
};

export default MainContainer;