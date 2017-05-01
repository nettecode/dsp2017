/**
 * Created by nette on 04.03.17.
 */
import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

import FiltersList from '../FiltersList/FiltersList';
import FilterMenu from '../FilterMenu/FilterMenu';
import { filterChannel, filterTools } from '../../actions';

import './MainMenu.css';

class MainMenu extends React.Component {
    constructor(props) {
        super(props);

        // this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleChannelChange = this.handleChannelChange.bind(this);
        this.handleToolChange = this.handleToolChange.bind(this);
    }

    // handleFilterChange(value){
    //     console.log("newValue: " + Number(value));
    // }

    handleChannelChange(value) {
        this.props.dispatch(filterChannel(value));
    }

    handleToolChange(value) {
        this.props.dispatch(filterTools(value));
    }

    render() {
        return (
            <div>
                <Paper zDepth={2} className="mainMenu">
                    <List>
                        <Link to={"/app/calendar"}>
                            <ListItem
                                primaryText="Kalendarz"
                            />
                        </Link>
                        <Link to={"/app/list"}>
                            <ListItem
                                primaryText="Lista"
                            />
                        </Link>
                        {/*<ListItem*/}
                            {/*primaryText="Baza pomysłów"*/}
                        {/*/>*/}
                    </List>
                    <Divider />
                    <FilterMenu
                        title="Kanały publikacji"
                        options={this.props.channels}
                        value={this.props.params.channelsFilter}
                        onChange={this.handleChannelChange}
                    />
                    <FilterMenu
                        title="Narzędzia publikacji"
                        options={this.props.tools}
                        value={this.props.params.toolsFilter}
                        onChange={this.handleToolChange}
                    />
                    <Divider />
                    <List>
                        <Link to={"/app/settings"}>
                            <ListItem
                                primaryText="Ustawienia"
                            />
                        </Link>
                    </List>
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    channels: state.channels,
    tools: state.tools,
    params: state.params
});

MainMenu = connect(
    mapStateToProps
)(MainMenu);

export default MainMenu;