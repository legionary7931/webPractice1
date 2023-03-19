import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
    render() {

        const loginButton = (
            <li>
                <Link to="/login">
                    <i className="material-icons">vpn_key</i>
                </Link>
            </li>
        );
    }
}