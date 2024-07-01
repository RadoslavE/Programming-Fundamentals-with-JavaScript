function rounding(firstNum, secondNum) {
    let number1 = Number(firstNum);
    let number2 = Number(secondNum);
    if (secondNum > 15) {
        number2 = 15
    }
    let cut = parseFloat(number1.toFixed(number2));
    console.log(cut);
}
rounding(3.5, 3);