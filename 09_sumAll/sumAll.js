const sumAll = function(num1, num2) {
    let sum = 0;

    if (num1 < num2 && num1 > 0 && num2 > 0 && num1 % 1 === 0 && num2 % 1 === 0 && typeof(num1) === 'number' && typeof(num2) === 'number') {
        for (let i = num1; i <= num2; i++) {
            sum += i;
        } 
    } else if (num1 > num2 && num1 > 0 && num2 > 0 && num1 % 1 === 0 && num2 % 1 === 0 && typeof(num1) === 'number' && typeof(num2) === 'number') {
      for (let i = num1; i >= num2; i--) {
            sum += i;
        }  
    } else {
        sum = "ERROR";
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
