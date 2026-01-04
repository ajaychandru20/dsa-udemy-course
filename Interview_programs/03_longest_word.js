function longestWord(sentence) {
    const words = sentence.split(" ")
    let longestWord = ''

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word
        }
    }
    return longestWord
}

longestWord('Iterates over the values of iterable objects')