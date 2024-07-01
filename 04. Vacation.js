function vacation(groupOfPeople, typeOfTheGroup, dayOfTheWeek) {
    let discount = 0;
    let priceForASinglePerson = 0;
    let total = 0;
    groupOfPeople = Number(groupOfPeople);
    if (typeOfTheGroup === "Students") {
        if (groupOfPeople >= 30) {
            discount = 0.15;
        }
        if (dayOfTheWeek === "Friday") {
            priceForASinglePerson = 8.45;
        } else if (dayOfTheWeek === "Saturday") {
            priceForASinglePerson = 9.80;
        } else if (dayOfTheWeek === "Sunday") {
            priceForASinglePerson = 10.46;
        }
    } else if (typeOfTheGroup === "Business") {
        if (groupOfPeople >= 100) {
            groupOfPeople = groupOfPeople - 10;
        }
        if (dayOfTheWeek === "Friday") {
            priceForASinglePerson = 10.90;
        } else if (dayOfTheWeek === "Saturday") {
            priceForASinglePerson = 15.60;
        } else if (dayOfTheWeek === "Sunday") {
            priceForASinglePerson = 16;
        }
    } else if (typeOfTheGroup === "Regular") {
        if (groupOfPeople >= 10 && groupOfPeople <= 20) {
            discount = 0.05;
        }
        if (dayOfTheWeek === "Friday") {
            priceForASinglePerson = 15;
        } else if (dayOfTheWeek === "Saturday") {
            priceForASinglePerson = 20;
        } else if (dayOfTheWeek === "Sunday") {
            priceForASinglePerson = 22.50;
        }
    }
    if (discount > 0) {
        total = groupOfPeople * priceForASinglePerson;
        total = total - (total * discount);
    } else {
        total = groupOfPeople * priceForASinglePerson;
    }
    console.log(`Total price: ${total.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");