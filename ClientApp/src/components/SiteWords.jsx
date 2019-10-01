import React from 'react';
import './SiteWords.css';
import AudioHelper from '../Utilities/AudioHelper';
import MathHelper from '../Utilities/MathHelper';

export class SiteWords extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            words: props.words,
            currentIndex: 0,
            prevIndex: 0
        };
        
        this.prevWord = this.prevWord.bind(this);
        this.nextWord = this.nextWord.bind(this);
    }

    prevWord(){
        const prevIndex = MathHelper.randomWordIndex(this.state.words.length, this.state.currentIndex);
        const currentIndex = this.state.prevIndex;
        this.setState({
            currentIndex: currentIndex,
            prevIndex: prevIndex
        });
    }

    nextWord(){
        const nextIndex = MathHelper.randomWordIndex(this.state.words.length, this.state.currentIndex);
        const prevIndex = this.state.currentIndex;
        this.setState({
            currentIndex: nextIndex,
            prevIndex: prevIndex
        });
    }

    wordClick(word) {
        AudioHelper.playAudio(word);
    }

    render(){
        const currentWord = this.state.words[this.state.currentIndex];
        return (
            <div className="main">
                <div className="cell"><span onClick={this.prevWord} className="scroll glyphicon glyphicon-circle-arrow-left"/></div>
                <div className="cell siteCell"><span className="siteWord" onClick={this.wordClick.bind(null, currentWord)}>{currentWord}</span></div>
                <div className="cell"><span onClick={this.nextWord} className="scroll glyphicon glyphicon-circle-arrow-right"/></div>
            </div>
        );
    } 
}

