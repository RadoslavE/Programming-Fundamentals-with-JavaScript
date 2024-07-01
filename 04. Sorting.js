function sorting(input) {
    let sortedArray = input.sort((a, b) => b - a);
    let result = [];
    let sortedArrayLength = sortedArray.length;
    for (let index = 0; index < sortedArrayLength / 2; index++) {
        let bigNumber = sortedArray.shift();
        let smallNumber = sortedArray.pop();
        result.push(bigNumber);
        result.push(smallNumber);
    }
    console.log(result.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);