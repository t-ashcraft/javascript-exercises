const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        return "ERROR";
    }
    let lower = (a>b)?b:a;
    let higher = (a>b)?a:b;
    let sum = 0;
    for (; lower <= higher; lower++) {
        sum += lower;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
