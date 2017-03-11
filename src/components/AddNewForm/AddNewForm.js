/**
 * Created by nette on 04.03.17.
 */
import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import Checkbox from 'material-ui/Checkbox';

import FiltersList from './../FiltersList/FiltersList';

require('./AddNewForm.css');

const AddNewForm = React.createClass({
    render: function () {
        return (
            <div className="formContainer">
                <div>
                    <TextField
                        defaultValue=""
                        floatingLabelText="Nazwa"
                    /><br/>
                    <TextField
                        hintText=""
                        multiLine={true}
                        rows={2}
                        rowsMax={4}
                        floatingLabelText="Opis"
                    />
                    <p>Termin publikacji</p>
                    <DatePicker hintText="Data" />
                    <TimePicker
                        format="24hr"
                        hintText="24hr Format"
                    />
                    {/*<Checkbox*/}
                        {/*label="Cykliczność: "*/}
                    {/*/>*/}
                </div>
                <div>
                    <FiltersList name="Kanały publikacji" channels={this.props.channels}/>
                    <FloatingActionButton mini={true} className="addNewOptionBtn">
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
                <div>
                    <FiltersList name="Narzędzia publikacji" channels={this.props.tools}/>
                    <FloatingActionButton mini={true} className="addNewOptionBtn">
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
            </div>
        );
    }
});

export default AddNewForm;