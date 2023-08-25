const fibonacci = function(number) {
    if (number < 0) return "OOPS";
    if (number === 0) return 0;
    if (number == "1") return 1;
    let theNumBeforePreviousNumb = 0;
    let previousNumb = 1;
    let currentNumb = 0;
    for (let i = 2; i <= number; i++) {
        currentNumb = previousNumb + theNumBeforePreviousNumb;
        theNumBeforePreviousNumb = previousNumb;
        previousNumb = currentNumb;
    };
    return currentNumb;
};

// Do not edit below this line
module.exports = fibonacci;

// let theNumBeforePreviousNumb = 0;
// let previousNumb = 1;
// let currentNumb = 0;

// currentNumb = previousNumb + theNumBeforePreviousNumb;
// previousNumb = currentNumb;
// theNumBeforePreviousNumb = previousNumb;
// return currentNumb;