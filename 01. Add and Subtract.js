function addAndSubtract(array) {
    let sumOfTheNormalArray = 0;
    let sumOfTheModdedArray = 0;
    let moddedArray = [];
    for (let i = 0; i < array.length; i++) {
        let number = Number(array[i]);
        sumOfTheNormalArray = sumOfTheNormalArray + number;
        if (number % 2 === 0) {
            number = number + i;
        } else {
            number = number - i;
        }
        sumOfTheModdedArray = sumOfTheModdedArray + number;
        moddedArray.push(number);
    }
    console.log(moddedArray);
    console.log(sumOfTheNormalArray);
    console.log(sumOfTheModdedArray);
}
addAndSubtract([5, 15, 23, 56, 35]);