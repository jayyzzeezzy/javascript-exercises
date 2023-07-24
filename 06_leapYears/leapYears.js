const leapYears = function(year) {
    if (year % 100 === 0 && year % 400 !== 0) return false;
    
    if (year % 4 == 0 || year % 400 == 0) {
        return true;
    }
    else {
        return false;
    }
};

// the TOP solution writes this in one line of code
// const leapYears = function(year) {
//     return year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0);
// };

// Do not edit below this line
module.exports = leapYears;
