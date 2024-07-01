function magicSum(array, number) {
    let arrayLength = array.length;
    for (let index = 0; index < arrayLength; index++) {
        if (index !== 0) {
            let prevNumber = Number(array[index - 1]);
            for (let i = index; i < arrayLength; i++) {
                let currentNumber = Number(array[i]);
                let sum = currentNumber + prevNumber;
                if (sum === number) {
                    console.log(`${prevNumber} ${currentNumber}`);
                }
            }
        }
    }
}
magicSum([1, 7, 6, 2, 19, 23], 8);