function perfectNumber(number) {
    let sum = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    if (sum === number && number !== 1) {
        return ("We have a perfect number!");
    } else {
        return ("It's not so perfect.");
    }
}
console.log(perfectNumber(28));