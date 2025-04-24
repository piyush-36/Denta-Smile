import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../sections/Footer/Footer';
import Symptoms from '../sections/Symptoms/Symptoms';
import Appointment from '../sections/Appointment/Appointment';
import Services from '../sections/Services/Services';

const Servicespage = () => {
    return (
        <>
            <Navbar />
            <Services/>
            <Symptoms />
            <Appointment />
            <Footer />
        </>
    );
};

export default Servicespage;