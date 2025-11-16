const fibonacci = function(number) {
    let firstNumber = 0;
    let secondNumber = 1;
    if (number == 0) {
        return 0;
    } else if (number < 0) {
        return "OOPS";
    }
    for (let i = 1; i < number; i++) {
        let sum = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = sum; 
    }
    return secondNumber;
};

// Do not edit below this line
module.exports = fibonacci;
