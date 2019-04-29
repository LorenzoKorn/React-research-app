import React, {Component} from 'react';
import './App.css';
import './css/chapters.css';
import {chapters} from './Data/Chapters';
import {questions} from './Data/forum'

import {Exercises} from './Components/Exercises/Exercises';
import {Forum} from './Components/Forum/Forum';
import {Question} from "./Components/Forum/Question";
import {BrowserRouter as Router, Route} from "react-router-dom";

function question({ match }) {
    return (
        <div>
            <Question qid={match.params.qid} questions={questions} opened={true} />
        </div>
    );
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <Router>
                        <Route path="/" exact component={() => <Exercises chapters={chapters}/>}/>
                        <Route path="/forum/" exact component={() => <Forum questions={questions}/>}/>
                        <Route path="/forum/:qid" component={question}/>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;