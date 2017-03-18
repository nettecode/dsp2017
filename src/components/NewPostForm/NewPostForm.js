/**
 * Created by nette on 18.03.17.
 */
import React from 'react';

import TextField from 'material-ui/TextField';

import { connect } from 'react-redux'
import { addNewPost } from '../../actions'

class NewPostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postName: '',
            description: '',
            datetime: '',
            publishChannels: 0,
            publishTools: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;

        this.setState({[name]: event.target.value});

        console.log(name + ': ' + event.target.value);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.postName);
        event.preventDefault();

        this.props.dispatch(addNewPost(this.state));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <TextField
                    name="postName"
                    value={this.state.name}
                    floatingLabelText="Nazwa"
                    onChange={this.handleChange}
                /><br/>
                <input type="submit" value="Submit" />
            </form>
        );
    }
};

NewPostForm = connect()(NewPostForm);

export default NewPostForm;