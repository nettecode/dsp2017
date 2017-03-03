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
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

require('./main.css');

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

function handleTouchTap() {
    alert('onTouchTap triggered on the title component');
}

let Header = React.createClass({
    getChildContext() {
        return {muiTheme: getMuiTheme(baseTheme)};
    },

    render: function () {
        return (
            <div>
                {/*<h1>Social Media Planner</h1>*/}
                {/*<FlatButton label="Kalendarz"/>*/}
                {/*<FlatButton label="Lista"/>*/}
                {/*<FlatButton label="Baza pomysłów"/>*/}
                {/*<FlatButton label="Ustawienia"/>*/}
                {/*<div>*/}
                    {/*<FloatingActionButton style={style}>*/}
                        {/*<ContentAdd />*/}
                    {/*</FloatingActionButton>*/}
                {/*</div>*/}
                {/*<AddNew/>*/}
                <AppBar
                    title={<span>Social Media Planner</span>}
                    onTitleTouchTap={handleTouchTap}
                    iconElementRight={<FlatButton label="Login" />}
                />
                <div className="container">
                    <Paper zDepth={2} className="main-menu">
                        <List>
                            <ListItem
                                primaryText="Kalendarz"
                            />
                            <ListItem
                                primaryText="Lista"
                            />
                            <ListItem
                                primaryText="Baza pomysłów"
                            />
                        </List>
                        <Divider />
                        <List>
                            <Subheader>Kanały publikacji</Subheader>
                            <ListItem
                                leftCheckbox={<Checkbox checked={true}/>}
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
                        </List>
                        <List>
                            <Subheader>Narzędzia publikacji</Subheader>
                            <ListItem
                                leftCheckbox={<Checkbox checked={true}/>}
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
                        </List>
                        <Divider />
                        <List>
                            <ListItem
                                primaryText="Settings"
                            />
                        </List>
                    </Paper>
                    <div className="right-area">
                        <p>"Lorem dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus. Integer ultrices posuere cubilia Curae, Nulla ipsum dolor lacus, suscipit adipiscing. Cum sociis natoque penatibus et ultrices volutpat. Nullam wisi ultricies a, gravida vitae, dapibus risus ante sodales lectus blandit eu, tempor diam pede cursus vitae, ultricies eu, faucibus quis, porttitor eros cursus lectus, pellentesque eget, bibendum a, gravida ullamcorper quam. Nullam viverra consectetuer. Quisque cursus et, porttitor risus. Aliquam sem. In hendrerit nulla quam nunc, accumsan congue. Lorem ipsu"</p>
                    </div>
                </div>
                <div className="app-footer">
                    <FloatingActionButton>
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
            </div>
        );
    }
});

Header.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

ReactDOM.render(<Header />, document.getElementById('main-wrapper'));