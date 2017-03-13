/**
 * Created by nette on 10.03.17.
 */
import React, { PropTypes } from 'react';

import FontIcon from 'material-ui/FontIcon';

import './PostItem.css';

const PostItem = ({ onClick, completed, text }) => (
    <li className="postItem">
        <FontIcon className="material-icons">done</FontIcon>
        <div className="postDetails">
            <label>{text}</label>
            <div>
                <label>Buffer</label>
                <ul className="socialMediaIcons">
                    <li><div className="socialMediaIcon"></div></li>
                    <li><div className="socialMediaIcon"></div></li>
                    <li><div className="socialMediaIcon"></div></li>
                </ul>
                <FontIcon className="material-icons">autorenew</FontIcon>
                <label>21.02.2017 13:25</label>
                <FontIcon className="material-icons">alarm on</FontIcon>
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