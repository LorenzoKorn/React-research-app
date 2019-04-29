import React, {Component} from 'react';
import {Comment} from "./Comment";
import {Icon} from "react-icons-kit";
import {check} from 'react-icons-kit/fa/check';
import {thumbsOUp} from 'react-icons-kit/fa/thumbsOUp';
import {smile} from 'react-icons-kit/icomoon/smile';
import {pencil} from 'react-icons-kit/fa/pencil';

var verified;

export class Answer extends Component {
    constructor(props) {
        super(props);

        verified = this.props.verified ? "green" : "transparent";
    }

    showComments() {
        return this.props.comments.map((comment, index) => {
            return <Comment key={index} text={comment.text} time={comment.time} person={comment.person} />
        });
    }

    render() {
        return (
            <>
                <div className="answer-box">
                    <div className="answer-votes">
                        <div className="a-votes">{Math.floor((Math.random() * 10) + 1)}</div>
                        <Icon icon={check} size={20} style={{color:verified}} />
                        <Icon icon={thumbsOUp} size={20} />
                    </div>

                    <div className="extra">
                        <div className="content__editor" dangerouslySetInnerHTML={{__html: this.props.text}}/>
                        <div className="by-who">
                            <div className="by-who-time">{this.props.time}&emsp;</div>
                            <div className="by-who-name">{this.props.person}&emsp;</div>
                            <Icon icon={smile} className="by-who-image"> </Icon>
                        </div>
                    </div>

                    <Icon icon={pencil} size={20} style={{color: "orange"}} className="edit-question"/>
                </div>

                {this.showComments()}

                <div className="comment-button">comment</div>
            </>
        );
    }
}