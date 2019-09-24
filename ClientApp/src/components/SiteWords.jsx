import React from 'react';
import './SiteWords.css';

const week1 = ["a", "and", "girl", "is", "name", "the", "am", "big", "i", "my", "school", "zero"];
const week2 = ["than", "one", "red", "see", "apple", "bus", "like", "boy", "tree", "yellow", "we", "no"];
const all = week1.concat(week2);

function playAudio(word) {
    document.getElementById('audioSrc').src = "audio/" + word + ".m4a";
    var audio = document.getElementById('audio');
    audio.load();
    audio.play();
}

export class SiteWords extends React.Component {
    constructor() {
        super();
        this.state = { 
            words: all,
            currentIndex: 0
        };
        
        this.prevWord = this.prevWord.bind(this);
        this.nextWord = this.nextWord.bind(this);
    }

    prevWord(){
        const prevIndex = this.state.currentIndex - 1;
        this.setState({
            currentIndex : prevIndex < 0 ?  this.state.words.length -1 : prevIndex
        });
    }

    nextWord(){
        const nextIndex = this.state.currentIndex + 1;
        this.setState({
            currentIndex : nextIndex >= this.state.words.length ? 0 : nextIndex
        });
    }

    wordClick(word) {
        playAudio(word);
    }

    render(){
        const currentWord = this.state.words[this.state.currentIndex];
        return (
            <div className="main">
                <div className="cell"><span onClick={this.prevWord} className="scroll glyphicon glyphicon-circle-arrow-left"></span></div>
                <div className="cell siteCell"><span className="siteWord" onClick={this.wordClick.bind(null, currentWord)}>{currentWord}</span></div>
                <div className="cell"><span onClick={this.nextWord} className="scroll glyphicon glyphicon-circle-arrow-right"></span></div>
            </div>
        );
    } 
}

