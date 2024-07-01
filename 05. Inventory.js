function inventory(input) {
    let obj = {};
    let array = [];
    for (let index = 0; index < input.length; index++) {
        let line = input[index];
        let [name, level, items] = line.split(" / ");
        items = items.split(", ")
        obj = {
            Hero: name,
            level: level,
            items: items,
        }
        array.push(obj)
        array.sort((heroA, heroB) => heroA.level - heroB.level);
    }
    array.forEach(element => {
        console.log(`Hero: ${element.Hero}`);
        console.log(`level => ${element.level}`);
        console.log(`items => ${element.items.join(", ")}`);
    });
}
inventory(['Batman / 2 / Banana, Gun', 'Superman / 18 / Sword', 'Poppy / 28 / Sentinel, Antara']);