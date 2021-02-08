import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import './Dropdown.css';

const Dropdown = () => {

    const [ open, setOpen ] = useState(false);

    const handleOpen = () => setOpen(!open);

    return(
        <React.Fragment>
            <ul className={open ? "dropdown__menu--open" : "dropdown__menu"} onClick={handleOpen}>
                {MenuItems.map( item => {
                    return (
                        <li key={item.id} className="dropdown__item">
                            <Link to={item.path} 
                                  className="dropdown__link" 
                                  onClick={() => setOpen(false)}>
                                {item.title}
                            </Link>
                            {console.log(item.title)}
                        </li>
                    )
                })};
            </ul>
        </React.Fragment>
    );
}

export default Dropdown;