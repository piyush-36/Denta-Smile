import React from 'react';
import './ContactForm.scss';
import icon from '../../assets/banner/icons/Calling.png';

function yeah(e) {
    e.preventDefault();
}

const ContactForm = () => {
    return (
        <form onSubmit={yeah}>
            <div className="row">
                <div className="col-lg-6">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Enter your name..." />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <label>E-mail Address</label>
                        <input type="email" className="form-control" placeholder="Enter email address..." />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <label>Service</label>
                        <select className="form-control">
                            <option>Dental Check-ups</option>
                            <option>Teeth Whitening</option>
                            <option>Dental Implants</option>
                            <option>Braces Treatment</option>
                            <option>Dentures & Bridges</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <label>Department</label>
                        <select className="form-control">
                            <option>Orthodontics</option>
                            <option>Prosthodontics</option>
                            <option>Cosmetic Dentistry</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Messages</label>
                        <textarea className="form-control" placeholder="Enter your messages..." rows="3"></textarea>
                    </div>
                </div>

                <div className="col-lg-6">
                    <button type="submit" className="btn appointment-btn">Book an appointment</button>
                </div>
                <div className="col-lg-6">
                    <div className="appointment-call">
                        <div className="icon">
                            <img src={icon} alt="icon" />
                        </div>
                        <div className="call-text">
                            <p>DentaSmile</p>
                            <h6>+91- 7020085239</h6>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
