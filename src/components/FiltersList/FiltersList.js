/**
 * Created by nette on 04.03.17.
 */
import React from 'react';

import Checkbox from 'material-ui/Checkbox';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const FiltersList = React.createClass({
    render: function () {
        let channels = this.props.channels;
        channels = channels.map(function (item, index) {
            return (
                <ListItem key={index}
                          leftCheckbox={<Checkbox />}
                          primaryText={item}
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

export default FiltersList;