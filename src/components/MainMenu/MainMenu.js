/**
 * Created by nette on 04.03.17.
 */
import React from 'react';
import { connect } from 'react-redux';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

import FiltersList from '../FiltersList/FiltersList';
import FilterMenu from '../FilterMenu/FilterMenu';

import './mainMenu.css';

class MainMenu extends React.Component {
    constructor(props) {
        super(props);

        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    handleFilterChange(value){
        console.log("newValue: " + Number(value));
    }

    handleFilterOptionChange(value) {
        console.log('value: ' + value);
        // update visible list
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
                    <FilterMenu
                        name="Kanały publikacji"
                        options={this.props.channels}
                        value={this.props.params.filterChannels}
                        onChange={this.handleFilterOptionChange}
                    />
                    <Divider />
                    <FiltersList
                        name="Kanały publikacji"
                        options={this.props.channels}
                        onChange={this.handleFilterChange}
                        value="31"
                    />
                    <FiltersList
                        name="Narzędzia publikacji"
                        options={this.props.tools}
                        onChange={this.handleFilterChange}
                        value="7"
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