import React, {Component} from 'react';
import {EditorState, convertToRaw} from 'draft-js';
import {Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';

export class InputBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        };
    }

    onEditorStateChange(editorState) {
        this.setState({
            editorState,
        });
    };

    handleSubmitClick() {
        console.log(draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())));
        this.props.onSubmit(draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())));
        this.handleCancelClick();

    }

    handleCancelClick() {
        this.setState({
            editorState: ''
        })
    }

    render() {
        const {editorState} = this.state;
        return (
            <div>
                <div className="editor">
                    <Editor
                        editorState={editorState}
                        wrapperClassName="demo-wrapper"
                        editorClassName="demo-editor"
                        onEditorStateChange={(e) => this.onEditorStateChange(e)}
                    />
                </div>

                <button onClick={() => this.handleSubmitClick()}>submit</button>
                <button onClick={() => this.handleCancelClick()}>cancel</button>
            </div>
        )
    }
}
