import React from 'react';
import './SiteWords.css';
import badImg from '../Images/Dr_robotnik.png';
import goodImg from '../Images/sonic.jpg';

const week1 = ["a", "and", "girl", "is", "name", "the", "am", "big", "i", "my", "school", "zero"];
const week2 = ["than", "one", "red", "see", "apple", "bus", "like", "boy", "tree", "yellow", "we", "no"];
const all = week1.concat(week2);

function playAudio(word) {
    document.getElementById('audioSrc').src = "audio/" + word + ".m4a";
    var audio = document.getElementById('audio');
    audio.load();
    audio.play();
    return false;
}

function randomWordIndex(max, blockedIndex) {
    let result = Math.floor(Math.random() * max);
    while (result === blockedIndex) {
        result = Math.floor(Math.random() * max);
    }
    return result;
}

function shuffle(word1, word2) {
    const d = new Date();
    const n = d.getSeconds();
    const swap = n % 2 === 0;

    return swap ? { choice1: word2, choice2: word1 } : { choice1: word1, choice2: word2 };
}

export class SiteWordGame extends React.Component {
    constructor() {
        super();

        const currentIndex = randomWordIndex(all.length, "");
        const randomIndex = randomWordIndex(all.length, currentIndex);
        const choices = shuffle(all[currentIndex], all[randomIndex]);
        this.state = {
            words: all,
            currentIndex: currentIndex,
            randomIndex: randomIndex,
            choice1: choices.choice1,
            choice2: choices.choice2        };

        this.prevWord = this.prevWord.bind(this);
        this.nextWord = this.nextWord.bind(this);
        this.chooseWord = this.chooseWord.bind(this);
    }

    prevWord() {
        const currentIndex = randomWordIndex(all.length, "");
        const randomIndex = randomWordIndex(all.length, currentIndex);
        const choices = shuffle(all[currentIndex], all[randomIndex]);
        this.setState({
            currentIndex: currentIndex,
            randomIndex: randomIndex,
            choice1: choices.choice1,
            choice2: choices.choice2,
            showCheck: false
        });
    }

    nextWord() {
        const currentIndex = randomWordIndex(all.length, "");
        const randomIndex = randomWordIndex(all.length, currentIndex);
        const choices = shuffle(all[currentIndex], all[randomIndex]);
        this.setState({
            currentIndex: currentIndex,
            randomIndex: randomIndex,
            choice1: choices.choice1,
            choice2: choices.choice2,
            showCheck: false
        });
    }

    wordClick(word) {
        playAudio(word);
        return;
    }

    chooseWord(word) {
        const currentWord = this.state.words[this.state.currentIndex];
        const isCorrect = currentWord === word;
        playAudio(isCorrect ? "sonic_alright" : "sonic_terrible");
        this.setState({
            isCorrect: isCorrect,
            showCheck: true
        });
    }

    getCheckIcon() {
        if (this.state.showCheck) {
            return this.state.isCorrect ? <div><img className="checkIcon" src={goodImg} alt="Incorrect" /></div>
                : <div><img className="checkIcon" src={badImg} alt="correct" /></div>;
        }
        return null;
    }

    render() {
        const currentWord = this.state.words[this.state.currentIndex];
        const choice1 = this.state.choice1;
        const choice2 = this.state.choice2;

        return (
            <div className='main'>
                <div className="cell"><span onClick={this.prevWord} className="scroll glyphicon glyphicon-circle-arrow-left" /></div>
                <div className="cell siteCell"><span className="siteWord glyphicon glyphicon-volume-up" onClick={this.wordClick.bind(null, currentWord)}/></div>
                <div className="cell"><span onClick={this.nextWord} className="scroll glyphicon glyphicon-circle-arrow-right"/></div>
                <div className="choiceDiv">
                    <span onClick={this.chooseWord.bind(null, choice1)} className="choice1 siteWord">{choice1}</span>
                    <span onClick={this.chooseWord.bind(null, choice2)} className="choice2 siteWord">{choice2}</span>
                    {this.getCheckIcon()}
                </div> 
            </div>
        );
    }
}

