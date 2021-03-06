import React from 'react';
import { Link } from 'react-router-dom';
import './NavBox';

function NavBox(props) {
    return (
        <div className="NavBox">
            <ul>
                <li>
                    <Link to="/">Home Page</Link>
                </li>
                <li>
                    <Link to="/test">Test Page</Link>
                </li>
                <li>
                    <Link to="/form">The Form Page</Link>
                </li>
                <li>
                    <Link to="/reviews">The Reviews Page</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBox;