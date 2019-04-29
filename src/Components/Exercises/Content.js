import React, {Component} from 'react';
import {Link} from "react-router-dom";

export class Content extends Component {
    render() {
        return (
            <div className="content">
                <div className="content-order">{this.props.order}</div>
                <div className="content-type">{this.props.type}</div>
                <div className="content-name">{this.props.name}</div>
                <div className="content-num-ex">{this.props.numEx > 0 ? this.props.numEx : ''}</div>
                <Link className="content-link" to="/forum"> </Link>
            </div>
        );
    }
}