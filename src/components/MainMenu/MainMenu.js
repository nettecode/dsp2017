/**
 * Created by nette on 04.03.17.
 */
import React from 'react';
import { connect } from 'react-redux'

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

import FiltersList from '../FiltersList/FiltersList';

import './mainMenu.css';

let MainMenu = React.createClass({

    render: function () {
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
                    <FiltersList name="Kanały publikacji" channels={this.props.channels}/>
                    <FiltersList name="Narzędzia publikacji" channels={this.props.tools}/>
                    <Divider />
                    <List>
                        <ListItem
                            primaryText="Ustawienia"
                        />
                    </List>
                </Paper>
            </div>
        );
    }
});

const mapStateToProps = (state) => ({
    channels: state.channels
})

MainMenu = connect(
    mapStateToProps
)(MainMenu);

export default MainMenu;