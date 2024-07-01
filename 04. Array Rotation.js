function arrayRotation(array, numberOfRotations) {
    for (let index = 1; index <= numberOfRotations; index++) {
        let firstElement = array.shift();
        array.push(firstElement);
    }
    console.log(array.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2);