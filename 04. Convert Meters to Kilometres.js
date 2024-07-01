function convertMetersToKilometres(number) {
    number = Number(number);
    let convert = number / 1000;
    console.log(`${convert.toFixed(2)}`);
}
convertMetersToKilometres(5555);