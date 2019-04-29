import React, {Component} from 'react';
import '../../css/chapters.css';
import {Link} from "react-router-dom";
import {Answer} from "./Answer";
import {InputBox} from "../InputBox";
import {Icon} from "react-icons-kit";
import {smile} from 'react-icons-kit/icomoon/smile';
import {thumbsOUp} from 'react-icons-kit/fa/thumbsOUp';
import {pencil} from 'react-icons-kit/fa/pencil';

export class Question extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentQuestion: this.props.opened && this.getQuestion()
        }
    }

    getQuestion() {
        return this.props.questions.filter((question) => {
            return question.id === parseInt(this.props.qid);
        })[0];
    }

    showAnswers() {
        return this.state.currentQuestion.answers.map((answer, index) => {
            return <Answer key={index}
                           text={answer.text}
                           time={answer.time}
                           person={answer.person}
                           verified={answer.verified}
                           comments={answer.comments}/>;
        });
    }

    displayQuestions() {
        return (
            <div>
                <Link to={"/forum/" + this.props.qid} className="question-box">
                    <div className="answer-number">3</div>
                    <div className="question-text">{this.props.text}</div>
                    <div className="by-who">
                        <div className="by-who-time">{this.props.time}&emsp;</div>
                        <div className="by-who-name">{this.props.person}&emsp;</div>
                        <Icon icon={smile} className="by-who-image"> </Icon>
                    </div>
                </Link>
                <br/>
            </div>
        );
    }

    displayQuestion() {
        return (
            <div>
                <div className="question-box">
                    <div className="question-votes">
                        <div className="votes">3</div>
                        <Icon icon={thumbsOUp} size={25} style={{color: "green"}}/>
                    </div>

                    <div className="question-text"
                         style={{marginLeft: "15px"}}>{this.state.currentQuestion.text}</div>
                    <div className="by-who">
                        <div className="by-who-time">{this.state.currentQuestion.time}&emsp;</div>
                        <div className="by-who-name">{this.state.currentQuestion.person}&emsp;</div>
                        <Icon icon={smile} className="by-who-image"> </Icon>
                    </div>

                    <Icon icon={pencil} size={20} style={{color: "orange"}} className="edit-question"/>
                </div>

                {this.showAnswers()}

                <InputBox onSubmit={(answer) => this.onSubmitAnswer(answer)}/>
            </div>
        );
    }

    onSubmitAnswer(answer) {
        const answers = this.state.currentQuestion.answers;
        answers.unshift({
            "text": answer,
            "person": "Lorenzo",
            "votes": 0,
            "verified": false,
            "time": "1 sec ago",
            "comments": []
        });

        console.log(answers);

        this.setState(currentState => ({
            currentQuestion: {
                ...currentState.currentQuestion,
                answers
            }
        }))
    }

    render() {
        return (
            <>
                {this.props.opened ? this.displayQuestion() : this.displayQuestions()}
            </>
        );
    }
}