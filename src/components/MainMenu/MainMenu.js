/**
 * Created by nette on 04.03.17.
 */
import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

import FiltersList from '../FiltersList/FiltersList';

import './mainMenu.css';

const MainMenu = React.createClass({
    getInitialState: function(){
        return {
            channels: ['Facebook','Twitter', 'Instagram', 'Google+', 'Blog'],
            tools: ['Buffer', 'Facebook Post Planner', 'Jetpack']
        }
    }, //getInitialState
    render: function () {
        let channels = this.state.channels;
        let tools = this.state.tools;

        return (
            <div>
                <Paper zDepth={2} className="mainMenu">
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
                    <FiltersList name="Kanały publikacji" channels={channels}/>
                    <FiltersList name="Narzędzia publikacji" channels={tools}/>
                    <Divider />
                    <List>
                        <ListItem
                            primaryText="Settings"
                        />
                    </List>
                </Paper>
            </div>
        );
    }
});

export default MainMenu;