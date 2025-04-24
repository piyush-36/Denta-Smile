import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Appointment from '../sections/Appointment/Appointment';
import Banner from '../sections/Banner/Banner';
import Blogs from '../sections/Blogs/Blogs';
import Emergency from '../sections/Emergency/Emergency';
import Footer from '../sections/Footer/Footer';
import Services from '../sections/Services/Services';


const Home = () => {

    return (
        <>
            <Navbar/>
            <Banner/>
            <Services/>
            <Emergency/>
            <Blogs/>
            <Appointment/>
            <Footer/>
        </>
    );
};

export default Home;