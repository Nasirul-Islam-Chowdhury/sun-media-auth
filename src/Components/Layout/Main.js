import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Home/Footer';
import Header from '../Pages/Header/Header';
import AppreciatingAmountContainer from '../Pages/Home/AppreciatingAmountContainer';
import Home from '../Pages/Home/Home';
import OfferContainer from '../Pages/Home/OfferContainer';
import PhilosophyContainer from '../Pages/Home/PhilosophyContainer';
import Schedule from '../Pages/Home/Schedule';
import TeamContainer from '../Pages/Home/TeamContainer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Home></Home>
            <AppreciatingAmountContainer></AppreciatingAmountContainer>
            <PhilosophyContainer></PhilosophyContainer>
            <OfferContainer></OfferContainer>
            <TeamContainer></TeamContainer>
            <Schedule></Schedule>
            <Footer></Footer>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;