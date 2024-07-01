function oddOccurrences(input) {
    let inputArray = input.split(' ').map(e => e.toLowerCase());
    let obj = {};
    for (const word of inputArray) {
        if (!obj.hasOwnProperty(word)) {
            obj[word] = 0;
        }
        obj[word]++;
    }
    let arrOffOddElement = Object.entries(obj).filter(double => double[1] % 2 !== 0).sort((a, b) => b[1] - a[1]);
    let result = '';
    for (const array of arrOffOddElement) {
        result += `${array[0]} `
    }
    console.log(result);
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');