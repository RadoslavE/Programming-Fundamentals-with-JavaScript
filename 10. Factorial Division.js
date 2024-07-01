function factorialDivision(firstNumber, secondNumber) {
    function factorial(number) {
        if (number === 0) {
            return 1;
        } else {
            return number * factorial(number - 1);
        }
    }
    let firstNumberFactorial = factorial(firstNumber);
    let secondNumberFactorial = factorial(secondNumber);
    let result = firstNumberFactorial / secondNumberFactorial;
    console.log(result.toFixed(2));
}
factorialDivision(6, 2);