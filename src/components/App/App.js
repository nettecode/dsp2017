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
                <div className="container">
                    <MainMenu />
                    <div className="rightArea">
                        <VisiblePostsList />
                    </div>
                </div>

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