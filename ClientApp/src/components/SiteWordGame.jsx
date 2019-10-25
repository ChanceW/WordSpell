
import React from 'react';
import './SiteWords.css';
import AudioHelper from '../Utilities/AudioHelper';
import MathHelper from '../Utilities/MathHelper';
import GameMedia from './GameMedia';

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
            choice2: choices.choice2,
            correct: 0,
            checked: false
        };

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
            showCheck: false,
            checked: false
        });
    }

    wordClick(word) {
        AudioHelper.playAudio(word);
        return false;
    }

    chooseWord(word) {
        if (this.state.checked) {
            this.nextWord();
            return;
        }
        const currentWord = this.state.words[this.state.currentIndex];
        const isCorrect = currentWord === word;
        const correctCount = isCorrect ? this.state.correct + 1 : 0;
        this.setState({
            isCorrect: isCorrect,
            showCheck: true,
            correct: correctCount,
            checked: true
        });
    }

    getCheckIcon() {
        if (this.state.showCheck) {
            if (this.state.isCorrect) {
                const media = GameMedia.goodImages[MathHelper.randomWordIndex(GameMedia.goodImages.length, "")];
                const audio = GameMedia.goodAudio.filter((a) => {
                    return a.key === media.key;
                });
                AudioHelper.playAudio(audio[MathHelper.randomWordIndex(audio.length, "")].audio);
                return <div><img className="checkIcon" src={media.img} alt="correct" /></div>;
            }
            else {
                const media = GameMedia.badImages[MathHelper.randomWordIndex(GameMedia.badImages.length, "")];
                const audio = GameMedia.badAudio.filter((a) => {
                    return a.key === media.key;
                });
                AudioHelper.playAudio(audio[MathHelper.randomWordIndex(audio.length, "")].audio);
                return <div><img className="checkIcon" src={media.img} alt="Incorrect" /></div>;
            }
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
                <div className="cell"><span onClick={this.nextWord} className="scroll glyphicon glyphicon-circle-arrow-right" /></div>
                <div className={this.state.correct ? "green correctCount" : "red correctCount"}>{this.state.correct}</div>
                <div className="choiceDiv">
                    <span onClick={this.chooseWord.bind(null, choice1)} className="choice1 siteWord">{choice1}</span>
                    <span onClick={this.chooseWord.bind(null, choice2)} className="choice2 siteWord">{choice2}</span>
                    {this.getCheckIcon()}
                </div> 
            </div>
        );
    }
}

