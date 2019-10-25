import React, { useReducer } from "react";
import './NumberBoard.css';

const reducer = (state, action) => {
    let { type } = action;
    switch (type) {
        case "next":
            return { ...state, items: Math.round(Math.random() * 10), correct: false, guessValue: "" };
        case "guess":
            return { ...state, correct: String((10 - state.items)) === action.guess, guessValue: action.guess};
        default:
            break;
    }
};

let itemCount = 0;
function getRows(rowCount, columnCount) {
    return [...Array(rowCount).keys()].map(i => {
        return <div key={i} className="row">
            {getCells(columnCount)}
        </div>
    });
}

function getCells(columnCount) {
    return [...Array(columnCount).keys()].map(i => {
        itemCount--;
        return <div key={i} className="cell boardCell">
            <span className={"glyphicon glyphicon-apple green" + (itemCount > -1 ? "" : " noItem")}></span>
        </div>
    });
}

const NumberBoard = () => {
    let [state, dispatch] = useReducer(reducer, { items: Math.round(Math.random() * 10), guessValue: "" });
    const num = state.items;
    itemCount = num;
    return (
        <div className="main numBoard">
            <div className="quest">
                {num} + <input className={"guess " + (state.correct ? "green" : " red")} type="text" onChange={(event) => {
                    dispatch({ type: "guess", guess: event.target.value })
                }} value={state.guessValue} /> = 10
            </div>
            <div className={"table" + (state.correct ? " correct" : " red")}>
                {getRows(2, 5, num)}
            </div>
            <div className="navi">
                <div className="cell"><span onClick={() => { dispatch({ type: "next" }) }} className="scroll glyphicon glyphicon-circle-arrow-right" /></div>
            </div>
        </div>
    );
};

export default NumberBoard;