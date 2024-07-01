function makeADictionary(input) {
    let obj = {};
    for (line of input) {
        let obj1 = JSON.parse(line);
        let keys = Object.keys(obj1);
        let key = keys[0];
        obj[key] = obj1[key]
    }
    let sortedKeys = Object.keys(obj).sort((a, b) => a.localeCompare(b))

    for (key of sortedKeys) {
        console.log(`Term: ${key} => Definition: ${obj[key]}`)
    }
}
makeADictionary(['{"Coffee":"A hot drink made  from the roasted and ground seeds (coffee beans) of a tropical shrub."}', '{"Bus":"A large motor vehicle  carrying passengers by road, typically one serving the public  on a fixed route and for a  fare."}', '{"Boiler":"A fuel-burning apparatus or container for  heating water."}', '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}', '{"Microphone":"An instrument  for converting sound waves into electrical energy variations which may then be amplified,  transmitted, or recorded."}'])