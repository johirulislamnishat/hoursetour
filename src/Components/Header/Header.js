import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faPhoneAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import logo from '../../hoursetour.png'
import React from 'react';
import '../../App.css';

const Header = () => {

    const contact = <FontAwesomeIcon icon={faPhoneAlt} />
    const email = <FontAwesomeIcon icon={faEnvelope} />
    const user = <FontAwesomeIcon icon={faUser} />
    const lock = <FontAwesomeIcon icon={faLock} />
    return (
        <div>
            <div className='topBar flex'>
                <div className='md-container'>
                    <div className='flex position'>
                        <div className='flex '>
                            <span className='topLeftItems'>{contact}</span>
                            <p className='topLeftItems'>+19900000000</p>
                            <span className='topLeftItems'>{email}</span>
                            <p className='topLeftItems'>company@domain.com</p>
                        </div>

                        <div className='flex '>
                            <span className='topLeftItems'>{lock}</span>
                            <p className='topLeftItems'>Sign In</p>
                            <span className='topLeftItems'>{user}</span>
                            <p className='topLeftItems'>Sign Up</p>

                        </div>
                    </div>
                </div>
            </div>

            <hr />

            <div className='menuBar'>

                <div className='md-container'>

                    <div className='flex position'>
                        <img className='logo' src={logo} alt="" />

                        <div className='menu'>
                            <ul>
                                <li><a href="">Home</a></li>
                                <li><a href="">Destination</a></li>
                                <li><a href="">My Tours</a></li>
                                <li><a href="">About Us</a></li>
                                <li><a href="">Contact Us</a></li>

                            </ul>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;