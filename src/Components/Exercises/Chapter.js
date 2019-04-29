import React, {Component} from 'react';
import {SubChapter} from "./SubChapter";
import {Icon} from "react-icons-kit";
import {ic_keyboard_arrow_down} from 'react-icons-kit/md/ic_keyboard_arrow_down';
import {ic_keyboard_arrow_up} from 'react-icons-kit/md/ic_keyboard_arrow_up';

export class Chapter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    handleClick() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    showSubChapters() {
        return <div className="sub-chapters">{this.props.subChapters.map((subChapter, index) => {
            return <SubChapter key={index} name={subChapter.name} content={subChapter.content}/>;
        })}
        </div>
    }

    render() {
        return (
            <div className="chapter">
                <div className="chapter-name" onClick={() => this.handleClick()}>
                    <div>{this.props.name}</div>
                    <Icon icon={(this.state.isOpen ? ic_keyboard_arrow_up : ic_keyboard_arrow_down)}
                          size={30} style={{color: "#FFF"}}/>
                </div>
                {this.state.isOpen && this.showSubChapters()}
            </div>
        );
    }
}