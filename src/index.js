/**
 * Created by nette on 01.03.17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from './components/Header/Header';
import MainMenu from './components/MainMenu/MainMenu';
import AddNewDialog from './components/AddNew/AddNewDialog';
import PostItem from './components/PostItem/PostItem';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers'

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

require('./main.css');

const store = createStore(reducer)

let App = React.createClass({
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
                        <ul>
                            <PostItem />
                            <PostItem />
                            <PostItem />
                            <PostItem />
                            <PostItem />
                            <PostItem />
                            <PostItem />
                            <PostItem />
                            <PostItem />
                            <PostItem />
                            <PostItem />
                            <PostItem />
                            <PostItem />
                            <PostItem />
                            <PostItem />
                        </ul>
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

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('main-wrapper'));