import React, {Component} from 'react';
import { Content } from "./Content";

export class SubChapter extends Component {
    showContent() {
        return this.props.content.map((content, index) => {
            return <Content key={index} order={index + 1} name={content.name} type={content.type} numEx={content.numEx} />;
        });
    }

    render() {
        return (
            <div className="sub-chapter">
                <div className="sub-chapter-name"><strong>{this.props.name}</strong></div>
                <div className="sub-chapter-content">{this.showContent()}</div>
            </div>
        );
    }
}