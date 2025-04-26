const removeFromArray = function(a) {
    for (let i = 1; i < arguments.length; i++) {
        let elementRemoved = arguments[i];
        
        let index = a.indexOf(elementRemoved);
        while (index >= 0) {
            if (a.length == 1) {
                return [];
            }
            a.splice(index, 1);
            index = a.indexOf(elementRemoved)
        }
        
    }
    return a;
};

// Do not edit below this line
module.exports = removeFromArray;
