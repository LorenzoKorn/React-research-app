import React, {Component} from 'react';
import {Icon} from "react-icons-kit";
import {smile} from 'react-icons-kit/icomoon/smile';

export class Comment extends Component {
    render() {
        return (
            <div className="comment-box">
                <div className="comment-text">{this.props.text}</div>

                <div className="by-who">
                    <div className="by-who-time">{this.props.time}&emsp;</div>
                    <div className="by-who-name">{this.props.person}&emsp;</div>
                    <Icon icon={smile} className="by-who-image"> </Icon>
                </div>
            </div>
        );
}
}