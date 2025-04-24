import React from 'react';
import './Footer.scss';
import { FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";
import { Link } from 'react-router-dom';
import call from '../../assets/footer/calling.png';
import time from '../../assets/footer/time.png';
import location from '../../assets/footer/location.png';

const Footer = () => {

    const footerMenu = [
        {
            'name' : 'Home',
            'link' : '/'
        },
        {
            'name' : 'About Us',
            'link' : '/about'
        },
        {
            'name' : 'Dental Services',
            'link' : '/services'
        },
        {
            'name' : 'Blogs',
            'link' : '/blogs'
        },
        {
            'name' : 'Contact Us',
            'link' : '/contact'
        }
    ];

    const footerContacts = [
        {
            'title': 'Phone Number',
            'info': '"+91- 7020085239',
            'icon': call
        },
        {
            'title': 'Open Hour',
            'info': '10:00 AM - 9:00 PM',
            'icon': time
        },
        {
            'title': 'Clinic Address',
            'info': 'Shivansh Enclave, Vadodara, Gujarat 390009',
            'icon': location
        }
    ]

    return (
        <footer className='pt-100 pb-70'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-5">
                        <p>At DentaSmile, we are committed to your oral health and overall well-being. Our focus on personalized dental care and advanced dental treatments ensures you receive the highest quality dental services in Vadodara, tailored to meet your unique needs.</p>

                        <div className="social-logo">
                            <p>Follow us on</p>
                            <ul>
                                <li><a href="/"><FaFacebookF/></a></li>
                                <li><a href="/"><FaTwitter/></a></li>
                                <li><a href="/"><FaInstagram/></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2">
                        <div className="footer-link">
                            <p>Quick Links</p>
                            <ul>
                                {
                                    footerMenu.map(singleMenu => <li><Link to="/">{singleMenu.name}</Link></li>)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5">
                        <div className="footer-contact">
                            <p>Contact & Information</p>

                            {
                                footerContacts.map(footerContact => {
                                    return  <div className="contact-list">
                                                <div className="contact-icon">
                                                    <img src={footerContact.icon} alt="call" />
                                                </div>
                                                <div className="contact-text">
                                                    <p>{footerContact.title}</p>
                                                    <h5>{footerContact.info}</h5>
                                                </div>
                                            </div>
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className='copy-text'>
                        <p>&copy; DentaSmile. All Right Reserved</p>
                    </div>  
                    <div className='copy-links'>
                        <ul>
                            <li><Link to='/'>Terms of Use</Link></li>
                            <li><Link to='/'>Privacy Policy</Link></li>
                        </ul>
                    </div>                          
                </div>
            </div>
        </footer>
    );
};

export default Footer;