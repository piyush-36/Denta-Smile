import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Services.scss';
import ServicesData from './ServicesData.js';
import Service from '../../components/Service/Service.js';

const Services = () => {
    return (
        <section className='services-section pt-10 pb-10' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="col-lg-0 col-sm-0">
                        <SectionTitle title="What We Provide" subTitle="Services"/>
                    </div>
                </div>

                <div className="row">
                    {
                        ServicesData.map(Services => <Service serviceList={Services}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;