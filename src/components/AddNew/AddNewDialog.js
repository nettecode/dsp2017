/**
 * Created by nette on 03.03.17.
 */
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import AddNewForm from '../AddNewForm/AddNewForm';
import { connect } from 'react-redux'
import { addNewPost } from '../../actions'

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */

class AddNewDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.addPost = this.addPost.bind(this);
    }

    handleOpen() {
        this.setState({open: true});
    };

    handleClose() {
        this.setState({open: false});
    };

    addPost() {
        this.props.dispatch(addNewPost('test'));
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
                onTouchTap={this.addPost}
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
                    <AddNewForm channels={this.props.channels} tools={this.props.tools} />
                </Dialog>
            </div>
        );
    }
}

AddNewDialog = connect()(AddNewDialog);

export default AddNewDialog