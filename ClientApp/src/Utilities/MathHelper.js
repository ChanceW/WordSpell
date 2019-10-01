export default class MathHelper {
    static randomWordIndex(max, blockedIndex) {
        let result = Math.floor(Math.random() * max);
        while (result === blockedIndex) {
            result = Math.floor(Math.random() * max);
        }
        return result;
    }

    static shuffle(word1, word2) {
        const d = new Date();
        const n = d.getSeconds();
        const swap = n % 2 === 0;

        return swap ? { choice1: word2, choice2: word1 } : { choice1: word1, choice2: word2 };
    }
}