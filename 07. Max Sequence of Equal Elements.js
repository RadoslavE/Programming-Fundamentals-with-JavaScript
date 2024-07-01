function maxSequenceOfEqualElements(array) {
    let sequence = 1;
    let maxSequence = 0;
    let maxSequenceNumber = 0;
    let arrLength = array.length;
    for (let i = 0; i < arrLength; i++) {
        if (i !== 0) {
            let currentNumber = Number(array[i]);
            let prevNumber = Number(array[i - 1]);
            if (currentNumber === prevNumber) {
                sequence++;
                if (sequence > maxSequence) {
                    maxSequence = sequence;
                    maxSequenceNumber = currentNumber;
                }
            } else {
                sequence = 1;
            }
        }
    }
    console.log(`${((maxSequenceNumber) + ' ').repeat(maxSequence)}`);
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);