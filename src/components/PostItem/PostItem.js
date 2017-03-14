/**
 * Created by nette on 10.03.17.
 */
import React, { PropTypes } from 'react';

import FontIcon from 'material-ui/FontIcon';

import DateFormat from 'dateformat';

import './PostItem.css';

const formatDate = function(date) {
    return DateFormat('dd.mm.yyyy  hh:MM');
};

const PostItem = ({ onClick, completed, text, publishAt, recurring, channels, tools }) => (
    <li className="postItem">
        <FontIcon className='material-icons' style={{visibility: completed ? 'visible' : 'hidden'}}>done</FontIcon>
        <div className="postDetails">
            <label>{text}</label>
            <div>
                <label>Buffer</label>
                <ul className="socialMediaIcons">
                    <li><div className="socialMediaIcon"></div></li>
                    <li><div className="socialMediaIcon"></div></li>
                    <li><div className="socialMediaIcon"></div></li>
                </ul>
                <FontIcon className="material-icons" style={{visibility: recurring ? 'visible' : 'hidden'}}>autorenew</FontIcon>
                <label>{formatDate({publishAt})}</label>
                {/*<FontIcon className="material-icons">alarm on</FontIcon>*/}
            </div>
        </div>
        <div>
            <FontIcon className="material-icons">mode edit</FontIcon>
            <FontIcon className="material-icons">delete</FontIcon>
        </div>
    </li>
);

PostItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default PostItem;