function passwordValidator(password) {
    let passwordLength = password.length;
    let isValidPass = true;
    if (passwordLength < 6 || passwordLength > 10) {
        isValidPass = false;
        console.log("Password must be between 6 and 10 characters");
    }
    let isOnlyLettersAndDigits = true;
    let digitsCounter = 0;
    for (let i = 0; i < passwordLength; i++) {
        let currentCode = password.charCodeAt(i);
        let isNotNumber = currentCode < 48 || currentCode > 57;
        let isNumber = currentCode >= 48 && currentCode <= 57;
        let isNotSmallLatter = currentCode < 97 || currentCode > 122;
        let isNotBigLatter = currentCode < 65 || currentCode > 90;
        if (isNumber) {
            digitsCounter++;
        }
        if (isNotNumber && isNotSmallLatter && isNotBigLatter) {
            isValidPass = false;
            isOnlyLettersAndDigits = false;
        }
    }
    if (!isOnlyLettersAndDigits) {
        console.log("Password must consist only of letters and digits");
    }
    if (!(digitsCounter >= 2)) {
        isValidPass = false;
        console.log("Password must have at least 2 digits");
    }
    if (isValidPass) {
        console.log("Password is valid");
    }
}
passwordValidator('MyPass123');
passwordValidator('logIn');