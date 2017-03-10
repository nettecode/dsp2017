/**
 * Created by nette on 03.03.17.
 */
import React from 'react';

import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';

import './Header.css';

function handleTouchTap() {
    alert('onTouchTap triggered on the title component');
}

const Header = React.createClass({
    render: function () {
        return (
            <div className="header">
                <AppBar
                    title={<span>Social Media Planner</span>}
                    onTitleTouchTap={handleTouchTap}
                    showMenuIconButton={false}
                    iconElementRight={<FlatButton label="Login" />}
                />
            </div>
        );
    }
});

export default Header;