function poundsToDollars(number) {
    number = Number(number);
    let poundsToDollars = (number * 1.31).toFixed(3);
    console.log(poundsToDollars);
}
poundsToDollars(80);