const allWeeks = [
    ["a", "and", "girl", "is", "name", "the", "am", "big", "i", "my", "school", "zero"],
    //["than", "one", "red", "see", "apple", "bus", "like", "boy", "tree", "yellow", "we", "no"],
    //["come", "can", "mom", "two", "two", "teacher", "green", "to", "yes", "it", "on", "he", "little"],
    //["nice", "look", "she", "blue", "three", "want", "up", "an", "very", "so", "dad", "down"],
    //["for", "house", "in", "four", "stop", "you", "go", "has", "at", "orange", "not", "all"]
];

export default class WordList {
    static getWords(weeks) {
        let result = [];
        if (weeks.length) {
        }
        else {
            allWeeks.map((week) => {
                result = result.concat(week);
            }); 
        }
        return result;
    }
}
