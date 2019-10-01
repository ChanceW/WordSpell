export default class AudioHelper {
    static playAudio(word) {
        document.getElementById('audioSrc').src = "audio/" + word + ".m4a";
        var audio = document.getElementById('audio');
        audio.load();
        audio.play();
    }
}