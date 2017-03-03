/**
 * Created by nette on 01.03.17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import FlatButton from 'material-ui/FlatButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import Checkbox from 'material-ui/Checkbox';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const style = {
    marginRight: 20,
};

let AddNew = React.createClass({
    render: function () {
        return (
            <div>
                <TextField
                    defaultValue=""
                    floatingLabelText="Nazwa"
                /><br/>
                <TextField
                    hintText=""
                    multiLine={true}
                    rows={2}
                    rowsMax={4}
                    floatingLabelText="Opis"
                />
                <p>Termin publikacji</p>
                <DatePicker hintText="Data" />
                <TimePicker
                    format="24hr"
                    hintText="24hr Format"
                />
                <Checkbox
                    label="Rekurencyjny?"
                />
                <List>
                    <Subheader>Kanały publikacji</Subheader>
                    <ListItem
                        leftCheckbox={<Checkbox />}
                        primaryText="Facebook"
                    />
                    <ListItem
                        leftCheckbox={<Checkbox />}
                        primaryText="Twitter"
                    />
                    <ListItem
                        leftCheckbox={<Checkbox />}
                        primaryText="Instagram"
                    />
                    <ListItem
                        leftCheckbox={<Checkbox />}
                        primaryText="Google+"
                    />
                    <FloatingActionButton mini={true} style={style}>
                        <ContentAdd />
                    </FloatingActionButton>
                </List>
                <List>
                    <Subheader>Narzędzia publikacji</Subheader>
                    <ListItem
                        leftCheckbox={<Checkbox />}
                        primaryText="Buffer"
                    />
                    <ListItem
                        leftCheckbox={<Checkbox />}
                        primaryText="Facebook Post Planner"
                    />
                    <ListItem
                        leftCheckbox={<Checkbox />}
                        primaryText="Jetpack"
                    />
                    <FloatingActionButton mini={true} style={style}>
                        <ContentAdd />
                    </FloatingActionButton>
                </List>
            </div>
        );
    }
});

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
                <div>
                    <FloatingActionButton style={style}>
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
                <AddNew/>
            </div>
        );
    }
});

Header.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

ReactDOM.render(<Header />, document.getElementById('main-wrapper'));