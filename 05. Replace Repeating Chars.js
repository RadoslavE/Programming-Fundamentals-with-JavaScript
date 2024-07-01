function replaceRepeatingChars(input) {
    let outPut = input[0];
    for (let index = 1; index < input.length; index++) {
        let currentElement = input[index];
        let prevElement = input[index - 1];
        if (currentElement !== prevElement) {
            outPut += currentElement;
        }
    }
    console.log(outPut);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');