function pascalCaseSplitter(input) {
    let words = [];
    let i = 0;
    for (let index = 1; index <= input.length; index++) {
        if (input.charCodeAt(index) >= 65 && input.charCodeAt(index) <= 90) {
            words.push(input.substring(i, index));
            i = index;
        }
    }
    words.push(input.substring(i, input.length));
    console.log(words.join(', '));
}
pascalCaseSplitter('HoldTheDoor');