/**
 * Created by nette on 11.03.17.
 */
import React from 'react';
import { connect } from 'react-redux';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import Header from '../Header/Header';
import MainMenu from '../MainMenu/MainMenu';
import { openPostPropertiesDialog } from '../../actions';
import NewPostForm from '../NewPostForm/NewPostForm';

import VisiblePostsList from '../../containers/VisiblePostsList/VisiblePostsList';

import {Router, Route} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();

import SettingsView from '../SettingsView/SettingsView';
import CalendarView from '../CalendarView/CalendarView';

import './App.css'

const injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

let App = React.createClass({
    getChildContext() {
        return {muiTheme: getMuiTheme(baseTheme)};
    },
    render: function () {
        return (
            <div>
                <Header />
                <Router history={history}>
                    <div className="container">
                        <MainMenu />
                        <div className="rightArea">
                            <Route exact path={'/'} component={VisiblePostsList}></Route>
                            <Route path={'/calendar'} component={CalendarView}/>
                            <Route path={'/settings'} component={SettingsView}></Route>
                        </div>
                    </div>
                </Router>

                <div className="addNewButton">
                    <NewPostForm />
                    <FloatingActionButton onTouchTap={() => {
                        this.props.dispatch(openPostPropertiesDialog(true));
                    }}>
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
            </div>
        );
    }
});

App.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

App = connect()(App);

export default App;