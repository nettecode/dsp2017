/**
 * Created by nette on 18.03.17.
 */
import React from 'react';

import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import Checkbox from 'material-ui/Checkbox';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import FiltersList from './../FiltersList/FiltersList';

import { connect } from 'react-redux'
import { addNewPost } from '../../actions'

import './NewPostForm.css'

class NewPostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postName: '',
            description: '',
            datetime: new Date(),
            publishChannels: 0,
            publishTools: 0,
            // tmp
            date: '',
            time: '',
            // Channels
            channels: ['Facebook','Twitter', 'Instagram', 'Google+', 'Blog'],
            tools: ['Buffer', 'Facebook Post Planner', 'Jetpack'],
            open: false
        };

        this.basicState = this.state;

        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleChange(event, data) {
        if (event) {
            const name = event.target.name;

            this.setState({[name]: event.target.value});

            console.log(name + ': ' + event.target.value);
        } else if (data){
            console.log(data);
            this.setState({[name]: data});
        }
    }

    handleTimeChange(event, data){
        console.log(data.getHours() + ':' + data.getMinutes());

        let newDateTime = this.state.datetime;
        newDateTime.setHours(data.getHours());
        newDateTime.setMinutes(data.getMinutes());

        this.setState({datetime: newDateTime});
    }

    handleDateChange(event, data){
        console.log(data.getFullYear() + '-' + data.getMonth() + '-' + data.getDate());

        let newDateTime = this.state.datetime;
        newDateTime.setYear(data.getFullYear());
        newDateTime.setMonth(data.getMonth());
        newDateTime.setDate(data.getDate());

        this.setState({datetime: newDateTime});
    }

    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.postName);
        event.preventDefault();

        console.log('new date: ' + this.state.datetime);
        const newPost = this.state;

        this.props.dispatch(addNewPost(newPost));

        this.setState(this.basicState);
    }

    handleOpen() {
        this.setState({open: true});
    };

    handleClose() {
        this.setState({open: false});
    };

    render() {
        const actions = [
            <FlatButton
                label="Anuluj"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Dodaj"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleSubmit}
            />,
        ];

        return (

        <div>
            <FloatingActionButton onTouchTap={this.handleOpen}>
                <ContentAdd />
            </FloatingActionButton>
            <Dialog
                title="Planuj nowy post"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
            >
                <form>
                    <div className="formContainer">
                        <div>
                            <TextField
                                name="postName"
                                value={this.state.name}
                                floatingLabelText="Nazwa"
                                onChange={this.handleChange}
                            /><br/>
                            <TextField
                                name="description"
                                hintText=""
                                multiLine={true}
                                rows={2}
                                rowsMax={4}
                                floatingLabelText="Opis"
                                onChange={this.handleChange}
                            />
                            <p>Termin publikacji</p>
                            <DatePicker
                                name="date"
                                hintText="Data"
                                defaultDate={this.state.datetime}
                                onChange={this.handleDateChange}
                            />
                            <TimePicker
                                name="time"
                                format="24hr"
                                hintText="24hr Format"
                                defaultTime={this.state.datetime}
                                onChange={this.handleTimeChange}
                            />
                            {/*/!*<Checkbox*!/*/}
                            {/*/!*label="Cykliczność: "*!/*/}
                        </div>
                        <div>
                            <FiltersList name="Kanały publikacji" channels={this.state.channels}/>
                        </div>
                        <div>
                            <FiltersList name="Narzędzia publikacji" channels={this.state.tools}/>
                        </div>
                    </div>
                </form>
            </Dialog>
        </div>
        );
    }
};

NewPostForm = connect()(NewPostForm);

export default NewPostForm;