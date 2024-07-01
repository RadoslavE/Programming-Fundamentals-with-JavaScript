function nxNMatrix(number) {
    for (let index = 1; index <= number; index++) {
        let row = '';
        for (let i = 1; i <= number; i++) {
            row += `${number} `
        }
        console.log(row);
    }
}
nxNMatrix(5);