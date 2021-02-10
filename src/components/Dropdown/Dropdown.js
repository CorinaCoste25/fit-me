import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import './Dropdown.css';

const Dropdown = () => {

    const [ open, setOpen ] = useState(true);

    const handleOpen = () => setOpen(!open);

    return(
        <React.Fragment>
            <ul className="dropdown__menu" onClick={handleOpen}>
                {open && MenuItems.map( item => {
                    return (
                        <li key={item.id} className="dropdown__item">
                            <Link to={item.path} 
                                  className="dropdown__link" 
                                  onClick={() => setOpen(false)}>
                                  {item.title}
                                  {console.log(item.title)}
                            </Link>
                        </li>
                    )
                })};
            </ul>
        </React.Fragment>
    );
}

export default Dropdown;