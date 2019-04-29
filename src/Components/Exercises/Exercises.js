import React, {Component} from 'react';
import { Chapter } from './Chapter';

export class Exercises extends Component {
    showChapters() {
        return this.props.chapters.map((chapter, index) => {
           return <Chapter key={index} name={chapter.name} subChapters={chapter.subChapters} />;
        });
    }

    render() {
        return (
            <>
                {this.showChapters()}
            </>
        );
    }
}