function storeProvision(firstArr, secondArr) {
    let obj = {};
    for (let index = 0; index < firstArr.length; index++) {
        let productName = firstArr[index];
        index++
        obj[productName] = Number(firstArr[index]);
    }
    for (let i = 0; i < secondArr.length; i += 2) {
        let productName = secondArr[i];
        if (!obj.hasOwnProperty(productName)) {
            obj[productName] = 0;
        }
        obj[productName] += Number(secondArr[i + 1]);
    }
    for (const productNameKey in obj) {
        console.log(`${productNameKey} -> ${obj[productNameKey]}`);
    }
}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);