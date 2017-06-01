/**
 * Created by nette on 11.03.17.
 */
import React from 'react';
import { connect } from 'react-redux';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from '../Header/Header';

import {Router, Route} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();

import Login from '../Login/Login';
import Layout from '../Layout/Layout';

import { fetchChannels } from '../../actions';

import './App.css'

const injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

let App = React.createClass({
    getChildContext() {
        return {muiTheme: getMuiTheme(baseTheme)};
    },

    componentWillMount() {
        fetchChannels(this.props.dispatch);
    },

    render: function () {
        return (
            <div className="topOffset">
                <Router history={history}>
                    <div>
                        <Header />
                        <div>
                            <Route path={'/login'} component={Login}></Route>
                            <Route path={'/'} component={Layout}/>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
});

App.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

App = connect()(App);

export default App;