import React from 'react';
import './SiteWords.css';
import AudioHelper from '../Utilities/AudioHelper';
import MathHelper from '../Utilities/MathHelper';

import sonicGood from '../Images/sonic_good.png';
import sonicBad from '../Images/sonic_bad.png';
import marioGood from '../Images/mario_good.png';
import marioBad from '../Images/mario_bad.jpg';
import pikaGood from '../Images/pika_good.png';
import pikaBad from '../Images/pika_bad.png';

const goodImages = [
    { img: sonicGood, key: "sonic" },
    { img: marioGood, key: "mario" },
    { img: pikaGood, key: "pika" }
];
const badImages = [
    { img: sonicBad, key: "sonic" },
    { img: marioBad, key: "mario" },
    { img: pikaBad, key: "pika" }
];
const goodAudio = [
    { audio: "Game/Sonic/alright", key: "sonic" }, { audio: "Game/Sonic/incred", key: "sonic" },
    { audio: "Game/Mario/hehe", key: "mario" }, { audio: "Game/Mario/eureka", key: "mario" },
    { audio: "Game/Pika/happy", key: "pika" }, { audio: "Game/Pika/happy2", key: "pika" }
];
const badAudio = [
    { audio: "Game/Sonic/no-2", key: "sonic" }, { audio: "Game/Sonic/terr", key: "sonic" },
    { audio: "Game/Mario/mammamia", key: "mario" }, { audio: "Game/Mario/ohno", key: "mario" },
    { audio: "Game/Pika/angry", key: "pika" }, { audio: "Game/Pika/angry2", key: "pika" }
];

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
        this.setState({
            isCorrect: isCorrect,
            showCheck: true
        });
    }

    getCheckIcon() {
        if (this.state.showCheck) {
            if (this.state.isCorrect) {
                const media = goodImages[MathHelper.randomWordIndex(goodImages.length, "")];
                const audio = goodAudio.filter((a) => {
                    return a.key === media.key;
                });
                AudioHelper.playAudio(audio[MathHelper.randomWordIndex(audio.length, "")].audio);
                return <div><img className="checkIcon" src={media.img} alt="correct" /></div>;
            }
            else {
                const media = badImages[MathHelper.randomWordIndex(badImages.length, "")];
                const audio = badAudio.filter((a) => {
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

