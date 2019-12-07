import React, { useReducer } from "react";
import AudioHelper from '../Utilities/AudioHelper';

const reducer = (state, action) => {
    let { type } = action;
    switch (type) {
        case "next":
            return { ...state, currentIndex: Math.abs((state.currentIndex + 1) % state.items.length) };
        case "prev":
            return { ...state, currentIndex: Math.abs((state.currentIndex - 1) % state.items.length) };
        default:
            break;
    }
};

function wordClick(word) {
    AudioHelper.playAudio(word);
}

const SiteWords = ({ words }) => {
    let [state, dispatch] = useReducer(reducer, { items: words, currentIndex: 0 });

    const currentWord = state.items[state.currentIndex];
    return (
        <div className="main">
            <div className="cell"><span onClick={() => { dispatch({ type: "prev"}) }} className="scroll glyphicon glyphicon-circle-arrow-left" /></div>
            <div className="cell siteCell"><span className="siteWord" onClick={wordClick.bind(null, currentWord)}>{currentWord}</span></div>
            <div className="cell"><span onClick={() => { dispatch({ type: "next"}) }} className="scroll glyphicon glyphicon-circle-arrow-right" /></div>
        </div>
    );
};

export default SiteWords;