/**
 * Created by nette on 10.03.17.
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux'

import FontIcon from 'material-ui/FontIcon';

import DateFormat from 'dateformat';

import './PostItem.css';

const formatDate = function(date) {
    return DateFormat(date, 'dd.mm.yyyy  hh:MM');
};

class PostItem extends React.Component {
    render() {
        const { post, removePost, togglePostState } = this.props

        const availableChannels = (Object.assign([], this.props.channels)).reverse();
        let postChannels = post.channels;

        let channelsIcons = availableChannels.map(function (item, index) {
            if (postChannels < item.value) {
                return;
            } else {
                postChannels -= item.value;
                return (
                    <li key={index}>
                        <div className="socialMediaIcon" style={{backgroundColor: item.color}}></div>
                    </li>
                );
            }
        });

        return (
            <li className="postItem">
                <a href="#" onClick={() => togglePostState(post.id)}> <FontIcon className='material-icons' style={{visibility: post.completed ? 'visible' : 'hidden'}}>done</FontIcon></a>
                <div className="postDetails">
                    <label>{post.text}</label>
                    <div>
                        <label>N: {post.tools}</label>
                        <ul className="socialMediaIcons">
                            {channelsIcons}
                        </ul>
                        <FontIcon className="material-icons" style={{visibility: post.recurring ? 'visible' : 'hidden'}}>autorenew</FontIcon>
                        <label>{formatDate(post.publishAt)}</label>
                        {/*<FontIcon className="material-icons">alarm on</FontIcon>*/}
                    </div>
                </div>
                <div>
                    <FontIcon className="material-icons">mode edit</FontIcon>
                    <a href="#" onClick={() => removePost(post.id)}><FontIcon className="material-icons">delete</FontIcon></a>
                </div>
            </li>
        )
    }
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    // editPost: PropTypes.func.isRequired,
    removePost: PropTypes.func.isRequired,
    togglePostState: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    channels: state.channels,
})

PostItem = connect(
    mapStateToProps
)(PostItem);

export default PostItem;