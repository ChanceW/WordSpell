import sonicGood from '../Images/sonic_good.png';
import sonicBad from '../Images/sonic_bad.png';
import marioGood from '../Images/mario_good.png';
import marioBad from '../Images/mario_bad.jpg';
import pikaGood from '../Images/pika_good.png';
import pikaBad from '../Images/pika_bad.png';

const GameMedia = {
    goodImages : [
        { img: sonicGood, key: "sonic" },
        { img: marioGood, key: "mario" },
        { img: pikaGood, key: "pika" }
    ],

    badImages : [
        { img: sonicBad, key: "sonic" },
        { img: marioBad, key: "mario" },
        { img: pikaBad, key: "pika" }
    ],

    goodAudio : [
        { audio: "Game/Sonic/alright", key: "sonic" }, { audio: "Game/Sonic/incred", key: "sonic" },
        { audio: "Game/Mario/hehe", key: "mario" }, { audio: "Game/Mario/eureka", key: "mario" },
        { audio: "Game/Pika/happy", key: "pika" }, { audio: "Game/Pika/happy2", key: "pika" }
    ],

    badAudio : [
        { audio: "Game/Sonic/no-2", key: "sonic" }, { audio: "Game/Sonic/terr", key: "sonic" },
        { audio: "Game/Mario/mammamia", key: "mario" }, { audio: "Game/Mario/ohno", key: "mario" },
        { audio: "Game/Pika/angry", key: "pika" }, { audio: "Game/Pika/angry2", key: "pika" }
    ]
};

export default GameMedia;