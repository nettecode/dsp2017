/**
 * Created by nette on 06.04.17.
 */
import React, { PropTypes }  from 'react';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';

class FilterMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: this.props.value};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, index, value) {
        this.setState({'value': value});
        this.props.onChange(value);
    }

    render() {
        let options = this.props.options.map(function (item, index) {
            return (
                <MenuItem
                    key={index}
                    value={item.value}
                    primaryText={item.name} />
            );
        });

        return (
            <div>
                <Subheader>{this.props.title}</Subheader>
                <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                    <MenuItem value={0} primaryText="Wszystkie" />
                    {options}
                </DropDownMenu>
            </div>
        );
    }
};

FilterMenu.propTypes = {
    title: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};

export default FilterMenu;