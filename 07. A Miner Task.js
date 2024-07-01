function aMinerTask(input) {
    let obj = {};
    for (let index = 0; index < input.length; index++) {
        let material = input[index];
        index++;
        let quantity = Number(input[index]);
        if (!obj.hasOwnProperty(material)) {
            obj[material] = quantity;
        } else {
            obj[material] += quantity;
        }
    }
    for (const key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}
aMinerTask(['Gold', '155', 'Silver', '10', 'Copper', '17']);