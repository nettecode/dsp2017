/**
 * Created by nette on 11.03.17.
 */
import React from 'react';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from '../Header/Header';
import MainMenu from '../MainMenu/MainMenu';
import AddNewDialog from '../AddNew/AddNewDialog';
import PostItem from '../PostItem/PostItem';
import NewPostForm from '../NewPostForm/NewPostForm'

import VisiblePostsList from '../VisiblePostsList/VisiblePostsList';

require('./App.css');

const injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const App = React.createClass({
    getChildContext() {
        return {muiTheme: getMuiTheme(baseTheme)};
    },
    getInitialState: function(){
        return {
            channels: ['Facebook','Twitter', 'Instagram', 'Google+', 'Blog'],
            tools: ['Buffer', 'Facebook Post Planner', 'Jetpack']
        }
    }, //getInitialState
    render: function () {
        const channels = this.state.channels;
        const tools = this.state.tools;

        return (
            <div>
                <Header />
                <div className="container">
                    <MainMenu channels={channels} tools={tools} />
                    <div className="rightArea">
                        <VisiblePostsList />
                        <NewPostForm />
                    </div>
                </div>

                <div className="addNewButton">
                    <AddNewDialog channels={channels} tools={tools} />
                </div>
            </div>
        );
    }
});

App.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};
export default App;