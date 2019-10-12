export default class AudioHelper {
    static playAudio(word) {
        document.getElementById('audioSrc').src = "audio/" + word + ".mp3";
        var audio = document.getElementById('audio');
        audio.load();
        audio.play();
    }
}