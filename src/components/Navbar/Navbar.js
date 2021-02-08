import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { FaBars, FaTimes } from 'react-icons/fa';
import { TiArrowSortedDown } from 'react-icons/ti';

import './Navbar.css';
import Dropdown from '../Dropdown/Dropdown';

const Navbar = () => {

    const [ click, setClick ] = useState(false);
    const [ dropdown, setDropdown ] = useState(false);

    const handleClick = () => setClick(!click);

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    }

    const onMouseLeave = () => setDropdown(false);

    const closeMibileMenu = () => setClick(false);


    return (
        <React.Fragment>
            <nav className="navbar">
                <Link to="/" className="navbar__logo__link">
                    FTI ME
                </Link>
            <div className="navbar__button" onClick={handleClick}>
                { click ? <FaTimes /> : <FaBars />}
            </div>
                <div className="navbar__menu">
                    <ul className="navbar__list">
                        <li className="navbar__list__item">
                            <Link to="/" className="navbar__link">
                                About Us
                            </Link>
                        </li>
                        <li className="navbar__list__item">
                            <Link to="/" className="navbar__link" onClick={closeMibileMenu}>
                                Workout Plans
                            </Link>
                        </li>
                        <li className="navbar__list__item" 
                            onMouseEnter={onMouseEnter} 
                            onMouseLeave={onMouseLeave}>
                            <Link to="/" className="navbar__link" onClick={closeMibileMenu}>
                                Workouts
                                <TiArrowSortedDown />
                            </Link>
                            {dropdown && <Dropdown />}
                        </li>
                        <li className="navbar__list__item">
                            <Link to="/" className="navbar__link" onClick={closeMibileMenu}>
                                Contact
                            </Link>
                        </li>
                        <li className="navbar__list__item">
                            <Link to="/" className="navbar__link" onClick={closeMibileMenu}>
                                Registration
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default Navbar;