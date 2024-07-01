function palindromeIntegers(array) {
    for (let i = 0; i < array.length; i++) {
        let numberAsString = array[i].toString();
        let reversedNumber = numberAsString.split('').reverse().join('');
        if (numberAsString === reversedNumber) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
}
palindromeIntegers([32, 2, 232, 1010]);