const findTheOldest = function(people) {
    let theOldest;
    people.reduce((oldest, current) => {
        let currentYearOfDeath = current.yearOfDeath || new Date().getFullYear()
        let oldestYearOfDeath = oldest.yearOfDeath || new Date().getFullYear()
        if (currentYearOfDeath - current.yearOfBirth > oldestYearOfDeath - oldest.yearOfBirth) {
            theOldest = current;
            return current;
        } else {
            theOldest = oldest;
            return oldest;
        }
    })
    return theOldest;
};

// Do not edit below this line
module.exports = findTheOldest;
