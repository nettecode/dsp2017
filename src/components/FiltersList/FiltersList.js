/**
 * Created by nette on 04.03.17.
 */
import React, { PropTypes } from 'react';

import Checkbox from 'material-ui/Checkbox';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

function FiltersList ({ name, options, onChange, value }) {
    let checked, sum = value;

    const handleCheck = function (event, isChecked) {
        value =  Number(value) + (isChecked ? Number(event.target.value) : Number(-event.target.value));
        onChange(value);
    };

    options = (options.reverse()).map(function (item, index) {
        if (sum >= item.value) {
            sum -= item.value;
            checked = true;
        } else {
            checked = false;
        }

        return (
            <ListItem key={index}
                      leftCheckbox={<Checkbox onCheck={handleCheck} value={item.value} defaultChecked={checked}/>}
                      primaryText={item.name}
            />
        );
    }.bind(this));

    options.reverse();

    return (
        <List>
            <Subheader>{name}</Subheader>
            {options}
        </List>
    );
}

FiltersList.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.node.isRequired
};

export default FiltersList;