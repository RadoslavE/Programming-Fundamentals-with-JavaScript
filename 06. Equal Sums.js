function equalSums(array) {
    let leftSum = 0;
    let rightSum = 0;
    let arrayLength = array.length;
    let isEqual = false;
    for (let index = 0; index <= arrayLength; index++) {
        for (let i = 0; i < arrayLength; i++) {
            if (i !== index) {
                let num = Number(array[i]);
                if (i <= index) {
                    leftSum += num;
                } else if (i > index) {
                    rightSum += num;
                }
            }
            if (index === 0) {
                leftSum = 0;
            } else if (index === arrayLength - 1) {
                rightSum = 0;
            }
        }
        if (leftSum === rightSum) {
            console.log(index);
            isEqual = true;
        } else {
            leftSum = 0;
            rightSum = 0;
        }
    }
    if (!isEqual) {
        console.log('no');
    }
}
equalSums([1, 2, 3, 3]);