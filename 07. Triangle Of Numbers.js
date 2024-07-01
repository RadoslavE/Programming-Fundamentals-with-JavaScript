function triangleOfNumbers(number) {
    number = Number(number);
    let line = "";
    for (let i = 1; i <= number; i++) {
        for (let j = 1; j <= i; j++) {
            line += i + " ";
        }
        console.log(line);
        line = "";
    }
}
triangleOfNumbers(5);