import React from 'react';
import './SiteWords.css';
import badImg from '../Images/Dr_robotnik.png';
import goodImg from '../Images/sonic.jpg';
import AudioHelper from '../Utilities/AudioHelper';
import MathHelper from '../Utilities/MathHelper';

export class SiteWordGame extends React.Component {
    constructor(props) {
        super(props);

        const currentIndex = MathHelper.randomWordIndex(props.words.length, "");
        const randomIndex = MathHelper.randomWordIndex(props.words.length, currentIndex);
        const choices = MathHelper.shuffle(props.words[currentIndex], props.words[randomIndex]);
        this.state = {
            words: props.words,
            currentIndex: currentIndex,
            randomIndex: randomIndex,
            choice1: choices.choice1,
            choice2: choices.choice2        };

        this.prevWord = this.prevWord.bind(this);
        this.nextWord = this.nextWord.bind(this);
        this.chooseWord = this.chooseWord.bind(this);
    }

    prevWord() {
        const currentIndex = MathHelper.randomWordIndex(this.state.words.length, "");
        const randomIndex = MathHelper.randomWordIndex(this.state.words.length, currentIndex);
        const choices = MathHelper.shuffle(this.state.words[currentIndex], this.state.words[randomIndex]);
        this.setState({
            currentIndex: currentIndex,
            randomIndex: randomIndex,
            choice1: choices.choice1,
            choice2: choices.choice2,
            showCheck: false
        });
    }

    nextWord() {
        const currentIndex = MathHelper.randomWordIndex(this.state.words.length, "");
        const randomIndex = MathHelper.randomWordIndex(this.state.words.length, currentIndex);
        const choices = MathHelper.shuffle(this.state.words[currentIndex], this.state.words[randomIndex]);
        this.setState({
            currentIndex: currentIndex,
            randomIndex: randomIndex,
            choice1: choices.choice1,
            choice2: choices.choice2,
            showCheck: false
        });
    }

    wordClick(word) {
        AudioHelper.playAudio(word);
        return;
    }

    chooseWord(word) {
        const currentWord = this.state.words[this.state.currentIndex];
        const isCorrect = currentWord === word;
        AudioHelper.playAudio(isCorrect ? "sonic_alright" : "sonic_terrible");
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

