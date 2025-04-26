const findTheOldest = function() {
    let years = arguments[0].map((obj) => ((obj.yearOfDeath != undefined)?obj.yearOfDeath:2025) - obj.yearOfBirth)
    let ind = 0;
    let highest = 0;
    for (let i = 0; i < years.length; i++) {
        if (years[i] > highest) {
            ind = i;
            highest = years[i];
        }
    }
    return arguments[0][ind];
};

// Do not edit below this line
module.exports = findTheOldest;
