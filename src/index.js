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
                        <p>"Lorem dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus. Integer ultrices posuere cubilia Curae, Nulla ipsum dolor lacus, suscipit adipiscing. Cum sociis natoque penatibus et ultrices volutpat. Nullam wisi ultricies a, gravida vitae, dapibus risus ante sodales lectus blandit eu, tempor diam pede cursus vitae, ultricies eu, faucibus quis, porttitor eros cursus lectus, pellentesque eget, bibendum a, gravida ullamcorper quam. Nullam viverra consectetuer. Quisque cursus et, porttitor risus. Aliquam sem. In hendrerit nulla quam nunc, accumsan congue. Lorem ipsu"</p>
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