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

class MainMenu extends React.Component {
    constructor(props) {
        super(props);

        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    handleFilterChange(value){
        console.log("tbd");
    }

    render() {
        return (
            <div>
                <Paper zDepth={2} className="mainMenu">
                    <List>
                        {/*<ListItem*/}
                            {/*primaryText="Kalendarz"*/}
                        {/*/>*/}
                        <ListItem
                            primaryText="Lista"
                        />
                        {/*<ListItem*/}
                            {/*primaryText="Baza pomysłów"*/}
                        {/*/>*/}
                    </List>
                    <Divider />
                    <FiltersList
                        name="Kanały publikacji"
                        channels={this.props.channels}
                        onChange={this.handleFilterChange}
                    />
                    <FiltersList
                        name="Narzędzia publikacji"
                        channels={this.props.tools}
                        onChange={this.handleFilterChange}
                    />
                    {/*<Divider />*/}
                    {/*<List>*/}
                        {/*<ListItem*/}
                            {/*primaryText="Ustawienia"*/}
                        {/*/>*/}
                    {/*</List>*/}
                </Paper>
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    channels: state.channels,
    tools: state.tools
})

MainMenu = connect(
    mapStateToProps
)(MainMenu);

export default MainMenu;