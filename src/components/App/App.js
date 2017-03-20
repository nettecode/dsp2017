/**
 * Created by nette on 11.03.17.
 */
import React from 'react';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from '../Header/Header';
import MainMenu from '../MainMenu/MainMenu';
import NewPostForm from '../NewPostForm/NewPostForm'

import VisiblePostsList from '../VisiblePostsList/VisiblePostsList';

import './App.css'

const injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const App = React.createClass({
    getChildContext() {
        return {muiTheme: getMuiTheme(baseTheme)};
    },
    render: function () {
        return (
            <div>
                <Header />
                <div className="container">
                    <MainMenu />
                    <div className="rightArea">
                        <VisiblePostsList />
                    </div>
                </div>

                <div className="addNewButton">
                    <NewPostForm />
                </div>
            </div>
        );
    }
});

App.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};
export default App;