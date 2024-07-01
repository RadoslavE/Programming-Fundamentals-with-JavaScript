function maxNumber(array) {
    let result = '';
    for (let index = 1; index <= array.length; index++) {
        let isMax = true;
        let currentNumber = Number(array[index - 1]);
        for (let i = index; i < array.length; i++) {
            let nextNumber = Number(array[i]);
            if (nextNumber >= currentNumber) {
                isMax = false;
                break;
            }
        }
        if (isMax) {
            result += `${currentNumber} `;
        }
    }
    console.log(result);
}
maxNumber([14, 24, 3, 19, 15, 17]);