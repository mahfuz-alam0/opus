import React from 'react';
import Client from '../../Components/Client/Client';
import CreatePage from '../../Components/CreatePage/CreatePage';
import Custom from '../../Components/Custom/Custom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import Option from '../../Components/Option/Option';
import Resource from '../../Components/Resource/Resource';
import VideoTitel from '../../Components/VideoTitle/VideoTitel';
import WorkWithUs from '../../Components/workWithUs/WorkWithUs';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Client />
            <VideoTitel />
            <Custom />
            <WorkWithUs />
            <CreatePage />
            <Option />
            <Resource />
            <Footer />
        </div>
    );
};

export default Main;