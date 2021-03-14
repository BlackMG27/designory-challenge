import React, {Fragment} from 'react';
import logo, { ReactComponent as Logo } from './logo.svg';


const Navigation = () => (
    <Fragment>
        <nav>
            <Logo className="logo"/>
            <ul className="nav-links" aria-label="Main Menu">
                <li className="nav-link">
                    <a href="#">Portfolio</a>
                </li>
                <li className="nav-link">
                    <a href="#">Process</a>
                </li>
                <li className="nav-link">
                    <a href="#">Journal</a>
                </li>
                <li className="nav-link">
                    <a href="#">Contact Info</a>
                </li>
            </ul>
        </nav>
    </Fragment>
)

export default Navigation;