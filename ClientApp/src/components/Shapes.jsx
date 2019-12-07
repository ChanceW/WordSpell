import React, { useReducer } from "react";
import AudioHelper from '../Utilities/AudioHelper';
import './Shapes.css';

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

const shapes = [
    { key: "Circle", img: <circle cx="50" cy="50" r="50" fill="red" /> },
    { key: "Triangle", img: <polygon points="50 15, 100 100, 0 100" /> },
    { key: "Square", img: <rect x="0" y="20" width="100" height="100"/> },
    { key: "Pentagon", img: <polygon points="26,86 11.2,40.4 50,12.2 88.8,40.4 74,86 " fill="hsl(56,80%,50%)" /> },
    { key: "Octagon", img: <polygon points="34.2,87.4 12.3,65.5 12.3,34.5 34.2,12.6 65.2,12.6 87.1,34.5 87.1,65.5 65.2,87.4" fill="hsl(216,80%,50%)" /> }
];

const Shapes = () => {
    let [state, dispatch] = useReducer(reducer, { items: shapes, currentIndex: 0 });

    const shape = state.items[state.currentIndex];
    return (
        <div className="main">
            <div className="cell"><span onClick={() => { dispatch({ type: "prev" }) }} className="scroll glyphicon glyphicon-circle-arrow-left" /></div>
            <div className="cell siteCell"><div className="shapeContainer" onClick={wordClick.bind(null, shape.key)}>
                <span>{shape.key}</span>
                <svg width="150" height="150">{shape.img}</svg>
            </div></div>
            <div className="cell"><span onClick={() => { dispatch({ type: "next" }) }} className="scroll glyphicon glyphicon-circle-arrow-right" /></div>
        </div>
    );
};

export default Shapes;