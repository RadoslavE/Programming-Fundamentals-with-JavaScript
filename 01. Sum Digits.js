function sumDigits(number) {
    let numberToString = number.toString();
    let numberSplit = numberToString.split('');
    let sum = 0;
    for (let i = 0; i < numberSplit.length; i++) {
        sum += Number(numberSplit[i]);
    }
    console.log(sum);

}
sumDigits(245678);