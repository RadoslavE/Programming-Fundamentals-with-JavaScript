function bombNumbers(firstArray, secondArray) {
    for (let i = 0; i < firstArray.length; i++) {
        if (firstArray[i] === secondArray[0]) {
            firstArray.splice(i - secondArray[1] > 0 ? i - secondArray[1] : 0, secondArray[1] * 2 + 1)
            i = 0
        }
    }

    console.log(firstArray.reduce((a, v) => a + v, 0))
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);