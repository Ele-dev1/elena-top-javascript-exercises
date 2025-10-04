const palindromes = function (string) {
    let splitted = string.split("");
    //work with puntuaction
    let puntAndSpace = ['.', ',', '!', '?', ':', ';', '-', ' '];
    let cleaned = [];
    for (let char of splitted) {
        if (!(puntAndSpace.includes(char))) {
            cleaned.push(char);
        }
    }
    let joined =  cleaned.join('').toLowerCase();
    let reversedJoined =  cleaned.reverse().join('').toLowerCase();
    if (joined === reversedJoined) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;