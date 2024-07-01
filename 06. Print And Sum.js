function printAndSum(firstNum, secondNum) {
    let startNum = Number(firstNum);
    let stopNum = Number(secondNum);
    let numbers = "";
    let sum = 0;
    for (let i = startNum; i <= stopNum; i++) {
        sum = i + sum;
        numbers += i + " ";
    }
    console.log(numbers);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);