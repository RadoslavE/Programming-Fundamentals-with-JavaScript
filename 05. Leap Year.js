function leapYear(number) {
    number = Number(number);
    if (number % 4 === 0 && number % 100 !== 0 || number % 400 === 0) {
        console.log("yes");
    } else {
        console.log("no");
    }
}
leapYear("2003");
leapYear("4");