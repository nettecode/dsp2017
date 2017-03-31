/**
 * Created by nette on 04.03.17.
 */
import React, { PropTypes } from 'react';

import Checkbox from 'material-ui/Checkbox';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

class FiltersList extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            value: this.props.value
        };

        this.handleCheck = this.handleCheck.bind(this);
    }

    handleCheck(event, isChecked) {
        let value = Number(this.state.value) + (isChecked ? Number(event.target.value) : Number(-event.target.value));

        this.props.onChange(value);

        this.setState({
            value: value
        });
    }

    render() {
        // console.log('value: ' + this.state.value);
        let checked,
            sum = this.state.value ? this.state.value : 0,
            options = Object.assign([], this.props.options);

        options = (options.reverse()).map(function (item, index) {
            if (sum >= item.value) {
                sum -= item.value;
                checked = true;
            } else {
                checked = false;
            }

            return (
                <ListItem key={index}
                          leftCheckbox={<Checkbox onCheck={this.handleCheck} value={item.value} defaultChecked={checked}/>}
                          primaryText={item.name}
                />
            );
        }.bind(this));

        options.reverse();

        return (
            <List>
                <Subheader>{this.props.name}</Subheader>
                {options}
            </List>
        );
    }
}

FiltersList.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
};

export default FiltersList;