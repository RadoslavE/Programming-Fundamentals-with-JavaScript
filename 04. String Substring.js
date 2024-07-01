function stringSubstring(word, text) {
    let textArray = text.split(' ');
    let isNotFound = true;
    for (const words of textArray) {
        if (word.toLowerCase() === words.toLowerCase()) {
            console.log(word);
            isNotFound = false;
            break;
        }
    }
    if (isNotFound) {
        console.log(`${word} not found!`);
    }
}
stringSubstring('javascript', 'JavaScript is the best programming language');