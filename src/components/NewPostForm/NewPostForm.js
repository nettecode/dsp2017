/**
 * Created by nette on 18.03.17.
 */
import React from 'react';
import { connect } from 'react-redux'
import { addNewPost, editPost, openPostPropertiesDialog } from '../../actions'

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
            open: this.props.params.postPropertiesOpen,
            isPostEdited: false,
            rightBtnLabel: 'Dodaj'
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
                    this.setState({
                        title: 'Edytuj post',
                        rightBtnLabel: 'Zapisz',
                        isPostEdited: true,
                        editedPostId: editedPost.id,
                        postName: editedPost.name,
                        description: editedPost.description,
                        completed: editedPost.completed,
                        postName: editedPost.name,
                        datetime: new Date(editedPost.publishAt),
                        publishChannels: editedPost.channels,
                        publishTools: editedPost.tools
                    });
                }
            } else {
                this.setState({
                    title: 'Planuj nowy post',
                    rightBtnLabel: 'Dodaj',
                    isPostEdited: false,
                    editedPostId: null,
                    postName: '',
                    description: '',
                    datetime: new Date(),
                    publishChannels: 0,
                    publishTools: 0,
                });
            }
            this.setState({open: nextProps.params.postPropertiesOpen});
            return true;
        }

        return false;
    }

    handleChannelsChange(value) {
        this.setState({publishChannels: value});
    }

    handleToolsChange(value) {
        this.setState({publishTools: value});
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
        
        this.state.isPostEdited? this.props.dispatch(editPost(this.state.editedPostId, newPost)) : this.props.dispatch(addNewPost(newPost));

        this.setState(this.basicState);
    }

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
                label={this.state.rightBtnLabel}
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleSubmit}
            />,
        ];

        return (

        <div>
            <Dialog
                title={this.state.title}
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
                                defaultValue={this.state.postName}
                                onChange={this.handleChange}
                            /><br/>
                            <TextField
                                name="description"
                                hintText=""
                                multiLine={true}
                                rows={2}
                                rowsMax={4}
                                floatingLabelText="Opis"
                                defaultValue={this.state.description}
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
                                options={this.props.channels}
                                onChange={this.handleChannelsChange}
                                value={this.state.publishChannels}
                            />
                        </div>
                        <div>
                            <FiltersList
                                name="Narzędzia publikacji"
                                options={this.props.tools}
                                onChange={this.handleToolsChange}
                                value={this.state.publishTools}
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