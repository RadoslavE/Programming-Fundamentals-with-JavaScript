function piccolo(input) {
    let parking = new Set();
    let carCounter = 0;
    for (let index = 0; index < input.length; index++) {
        let [command, carNumber] = input[index].split(',');
        if (command === 'IN') {
            parking.add(carNumber);
            carCounter = carCounter + 1;
        } else {
            parking.delete(carNumber);
            carCounter = carCounter - 1;
        }
    }
    let sort = Array.from(parking).sort((a,b) => a.localeCompare(b));
    for (const carNumber of sort) {
        console.log(carNumber);
    }
    if (carCounter === 0) {
        console.log(`Parking Lot is Empty`);
    }
}
piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA']);