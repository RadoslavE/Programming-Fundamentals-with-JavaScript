function revealWords(specialWords, text) {
    let wordSplit = specialWords.split(', ');
    for (const word of wordSplit) {
        let wordsFromStars = '*'.repeat(word.length);
        text = text.replace(wordsFromStars, word);
    }
    console.log(text);
}
revealWords('great', 'softuni is ***** place for learning new programming languages');