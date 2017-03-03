/**
 * Created by nette on 01.03.17.
 */
var React = require('react');
var ReactDOM = require('react-dom');

import FlatButton from 'material-ui/FlatButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

let Header = React.createClass({
    getChildContext() {
        return {muiTheme: getMuiTheme(baseTheme)};
    },

    render: function () {
        return (
            <div className="app-header">
                <h1>Social Media Planner</h1>
                <FlatButton label="Kalendarz"/>
                <FlatButton label="Lista"/>
                <FlatButton label="Baza pomysłów"/>
                <FlatButton label="Ustawienia"/>
            </div>
        );
    }
});

Header.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

ReactDOM.render(<Header />, document.getElementById('main-wrapper'));