/**
 * Created by nette on 04.03.17.
 */
import React, { PropTypes } from 'react';

import Checkbox from 'material-ui/Checkbox';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const FiltersList = React.createClass({
    handleCheck: function (event, isChecked) {
        const value = isChecked ? event.target.value : -event.target.value;
        this.props.onChange(value);
    },

    render: function () {
        let channels = this.props.channels;

        channels = channels.map(function (item, index) {
            return (
                <ListItem key={index}
                          leftCheckbox={<Checkbox onCheck={this.handleCheck} value={item.value}/>}
                          primaryText={item.name}
                />
            );
        }.bind(this));
        return (
            <div>
                <List>
                    <Subheader>{this.props.name}</Subheader>
                    {channels}
                </List>
            </div>
        );
    }
});

FiltersList.propTypes = {
    name: PropTypes.string.isRequired,
    channels: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
};

export default FiltersList;