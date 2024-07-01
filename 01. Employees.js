function employees(names) {
    let object = {}
    for (let i = 0; i < names.length; i++) {
        object.name = names[i];
        let nameLength = object.name.length;
        console.log(`Name: ${object.name} -- Personal Number: ${nameLength}`);
    }
}
employees(['Radoslav Efremov', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);