import React, {Component} from 'react';
import '../../css/chapters.css';
import {Question} from "./Question";

export class Forum extends Component {
    showQuestions() {
        return this.props.questions.map((question, index) => {
            return <Question key={index} qid={question.id} text={question.text} time={question.time} person={question.person} opened={false} />;
        });
    }

    render() {
        return (
            <div>
                {this.showQuestions()}
            </div>
        );
    }
}