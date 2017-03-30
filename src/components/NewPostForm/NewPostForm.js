/**
 * Created by nette on 18.03.17.
 */
import React from 'react';
import { connect } from 'react-redux'
import { addNewPost, openPostPropertiesDialog } from '../../actions'

import _ from 'lodash';

import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import Checkbox from 'material-ui/Checkbox';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import FiltersList from './../FiltersList/FiltersList';

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
            open: this.props.params.postPropertiesOpen
        };

        this.basicState = this.state;

        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChannelsChange = this.handleChannelsChange.bind(this);
        this.handleToolsChange = this.handleToolsChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.open !== nextProps.params.postPropertiesOpen) {
            if (nextProps.params.editedPostId !== null) {
                const editedPost = _.find(this.props.posts, {'id': nextProps.params.editedPostId });

                if (editedPost) {
                    console.log();
                    this.setState({
                        postName: editedPost.text,
                        dateTime: editedPost.publishAt
                    });
                    this.forceUpdate();
                }
            }
            this.setState({open: nextProps.params.postPropertiesOpen});
            return true;
        }

        return false;
    }

    handleChannelsChange(value) {
        const newValue = this.state.publishChannels + Number(value);
        this.setState({publishChannels: newValue});
    }

    handleToolsChange(value) {
        const newValue = this.state.publishTools + Number(value);
        this.setState({publishTools: newValue});
    }

    handleChange(event, data) {
        if (event) {
            const name = event.target.name;
            this.setState({[name]: event.target.value});
        } else if (data){
            this.setState({[name]: data});
        }
    }

    handleTimeChange(event, data){
        let newDateTime = this.state.datetime;
        newDateTime.setHours(data.getHours());
        newDateTime.setMinutes(data.getMinutes());

        this.setState({datetime: newDateTime});
    }

    handleDateChange(event, data){
        let newDateTime = this.state.datetime;
        newDateTime.setYear(data.getFullYear());
        newDateTime.setMonth(data.getMonth());
        newDateTime.setDate(data.getDate());

        this.setState({datetime: newDateTime});
    }

    handleSubmit(event) {
        event.preventDefault();

        const newPost = this.state;

        this.props.dispatch(addNewPost(newPost));

        this.setState(this.basicState);
    }

    // handleOpen() {
    //     this.setState({open: true});
    // }

    handleClose() {
        this.props.dispatch(openPostPropertiesDialog(false));
    }

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
                            <FiltersList
                                name="Kanały publikacji"
                                channels={this.props.channels}
                                onChange={this.handleChannelsChange}
                            />
                        </div>
                        <div>
                            <FiltersList
                                name="Narzędzia publikacji"
                                channels={this.props.tools}
                                onChange={this.handleToolsChange}
                            />
                        </div>
                    </div>
                </form>
            </Dialog>
        </div>
        );
    }
}

const mapStateToProps = (state) => ({
    channels: state.channels,
    tools: state.tools,
    params: state.params,
    posts: state.posts
});

NewPostForm = connect(
    mapStateToProps
)(NewPostForm);

export default NewPostForm;