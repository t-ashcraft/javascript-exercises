const isPunc = function(c) {
    return (c !="!" && c!="." && c!="," && c!="?" && c!=" "); 
}

const palindromes = function () {
    let arr = Array.from(arguments[0]);    
    
    arr = arr.filter(isPunc);
    let string = arr.toString()
    let str = string.toLowerCase();
    
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
