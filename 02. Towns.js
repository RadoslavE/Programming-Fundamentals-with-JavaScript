function towns(input) {
    let obj = {};
    for (let index = 0; index < input.length; index++) {
        let cutInput = input[index].split(' | ');
        for (let i = 0; i < cutInput.length; i++) {
            if (i === 0) {
                obj.town = cutInput[i];
            } else if (i === 1) {
                obj.latitude = Number(cutInput[i]).toFixed(2);
            } else if (i === 2) {
                obj.longitude = Number(cutInput[i]).toFixed(2);
            }
        }
        console.log(obj);
    }
}
towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);