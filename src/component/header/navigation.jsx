import React, {Fragment} from 'react';
import logo, { ReactComponent as Logo } from './logo.svg';


const Navigation = () => (
    <Fragment>
        <nav>
            <Logo className="logo"/>
            <ul className="nav-links">
                <li>
                    <a href="portfolio">Portfolio</a>
                    <a href="Process">Process</a>
                    <a href="Journal">Journal</a>
                    <a href="Contact-Info">Contact Info</a>
                </li>
            </ul>
        </nav>
    </Fragment>
)

export default Navigation;