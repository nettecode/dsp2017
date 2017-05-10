/**
 * Created by nette on 03.03.17.
 */
import React from 'react';

import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';

import { Link } from 'react-router-dom';

import './Header.css';

function handleTouchTap() {
    // alert('onTouchTap triggered on the title component');
}

function Header() {
    return (
        <div className="header">
            <AppBar
                title={<Link to="/app/calendar"><span>Social Media Planner</span></Link>}
                onTitleTouchTap={handleTouchTap}
                showMenuIconButton={false}
                iconElementRight={<Link to="/login"><FlatButton label="Logout" /></Link>}
            />
        </div>
    );
}

export default Header;