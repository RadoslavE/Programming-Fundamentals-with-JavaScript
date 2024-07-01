function addAndSubtract(firstNumber, secondNumber, thirdNumber) {
    function sum(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }
    let resultSum = sum(firstNumber, secondNumber);
    function subtract(resultSum, thirdNumber) {
        return resultSum - thirdNumber;
    }
    let resultSubtract = subtract(resultSum, thirdNumber);
    console.log(resultSubtract);
}
addAndSubtract(23, 6, 10);