function searchForANumber(fisrtArr, secondArr) {
    let firstNumber = Number(secondArr[0]);
    let secondNumber = Number(secondArr[1]);
    let thirdNumber = Number(secondArr[2]);
    let counter = 0;
    fisrtArr.splice(firstNumber);
    fisrtArr.splice(0, secondNumber);
    for (let index = 0; index < fisrtArr.length; index++) {
        if (fisrtArr[index] === thirdNumber) {
            counter++;
        }
    }
    console.log(`Number ${thirdNumber} occurs ${counter} times.`);
}
searchForANumber([7, 1, 5, 8, 2, 7],[3, 1, 5]);