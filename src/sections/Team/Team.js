import React from 'react';
import './Team.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import imgOne from '../../assets/about/team/1.png';
import imgTwo from '../../assets/about/team/2.png';
import imgThree from '../../assets/about/team/3.png';

const Team = () => {

    const teams = [
        {
            'img': imgOne,
            'name': 'Dr Vardhman Dagli'
        },
        {
            'img': imgTwo,
            'name': 'Dr Anil Sekhawat'
        },
        {
            'img': imgThree,
            'name': 'Dr Vinay Singh'
        },
    ]


    return (
        <section className='team-section pt-100' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="col-lg-0">
                        <SectionTitle 
                            subTitle="Meet our Team"
                            title="Get to know the dentaSmile Team"
                        />
                    </div>
                </div>

                <div className="row">
                    {
                        teams.map (team => 
                            <div className="col-lg-4 col-sm-0">
                                <div className="team-card">
                                    <div className="team-img">
                                        <img src={team.img} alt="" height={"300px"} />
                                    </div>
                                    <h3>{team.name}</h3>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Team;