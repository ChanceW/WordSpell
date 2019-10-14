import React, { useReducer } from "react";
import AudioHelper from '../Utilities/AudioHelper';

const reducer = (state, action) => {
    let { type } = action;
    let prev, curr;
    switch (type) {
        case "next":
            prev = action.value;
            curr = action.value < state.words.length - 1 ? action.value + 1 : 0;
            return { ...state, currentIndex: curr, prevIndex: prev };
        case "prev":
            prev = action.value;
            curr = action.value > 1 ? action.value - 1 : state.words.length - 1;
            return { ...state, currentIndex: curr, prevIndex: prev };
        default:
            break;
    }
};

function wordClick(word) {
    AudioHelper.playAudio(word);
}

const SiteWords = ({ words }) => {
    let [state, dispatch] = useReducer(reducer, { words: words, prevIndex: 0, currentIndex: 0 });

    const currentWord = words[state.currentIndex];
    return (
        <div className="main">
            <div className="cell"><span onClick={() => { dispatch({ type: "prev", value: state.currentIndex }) }} className="scroll glyphicon glyphicon-circle-arrow-left" /></div>
            <div className="cell siteCell"><span className="siteWord" onClick={wordClick.bind(null, currentWord)}>{currentWord}</span></div>
            <div className="cell"><span onClick={() => { dispatch({ type: "next", value: state.currentIndex }) }} className="scroll glyphicon glyphicon-circle-arrow-right" /></div>
        </div>
    );
};

export default SiteWords;