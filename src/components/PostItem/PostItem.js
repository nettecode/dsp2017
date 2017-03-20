/**
 * Created by nette on 10.03.17.
 */
import React, { PropTypes } from 'react';

import FontIcon from 'material-ui/FontIcon';

import DateFormat from 'dateformat';

import './PostItem.css';

const formatDate = function(date) {
    return DateFormat(date, 'dd.mm.yyyy  hh:MM');
};

class PostItem extends React.Component {
    render() {
        const { post, removePost, togglePostState } = this.props

        return (
            <li className="postItem">
                <a href="#" onClick={() => togglePostState(post.id)}> <FontIcon className='material-icons' style={{visibility: post.completed ? 'visible' : 'hidden'}}>done</FontIcon></a>
                <div className="postDetails">
                    <label>{post.text}</label>
                    <div>
                        <label>N: {post.tools}</label>
                        <ul className="socialMediaIcons">
                            <li><div className="socialMediaIcon"></div></li>
                            <li><div className="socialMediaIcon"></div></li>
                            <li><div className="socialMediaIcon"></div></li>
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

export default PostItem;