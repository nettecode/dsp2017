/**
 * Created by nette on 10.03.17.
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import FontIcon from 'material-ui/FontIcon';

import DateFormat from 'dateformat';

import { openPostPropertiesDialog } from '../../actions';

import './PostItem.css';

const formatDate = function(date) {
    return DateFormat(date, 'dd.mm.yyyy  hh:MM');
};

class PostItem extends React.Component {
    render() {
        const { post, removePost, togglePostState, channels } = this.props;

        const availableChannels = (Object.assign([], channels)).reverse();
        let postChannels = post.channels;

        let channelsIcons = availableChannels.map(function (item, index) {
            if (postChannels >= item.value) {
                postChannels -= item.value;
                return (
                    <li key={index}>
                        <div className="socialMediaIcon" style={{backgroundColor: item.color}}></div>
                    </li>
                );
            }
        }).reverse();

        return (
            <li className="postItem">
                <a href="#" onClick={() => togglePostState(post.id)}>
                    <FontIcon className='material-icons' style={{visibility: post.completed ? 'visible' : 'hidden'}}>done</FontIcon>
                </a>
                <div className="postDetails">
                    <label>{post.name}</label>
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
                    <a href="#" onClick={() => {
                        this.props.dispatch(openPostPropertiesDialog(true, post.id));
                    }}>
                        <FontIcon className="material-icons">mode edit</FontIcon>
                    </a>
                    <a href="#" onClick={() => removePost(post.id)}><FontIcon className="material-icons">delete</FontIcon></a>
                </div>
            </li>
        )
    }
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    channels: PropTypes.array.isRequired
};

PostItem = connect()(PostItem);

export default PostItem;