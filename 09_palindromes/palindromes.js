const palindromes = function (string) {
    const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    return processedString == processedString.split("").reverse().join("");
    // const backwardArray = [...string].reverse();
    // const forwardArray = [...string];
    // let result = false;
    // for (let i = 0; i < forwardArray.length; i++) {
    //     for (let j = 0; j < backwardArray.length; j++) {
    //         if (forwardArray[i].charCodeAt(i))
    //         if (forwardArray[i] === backwardArray[j]) {
    //             result = true;
    //         }
    //         else {
    //             result = false;
    //         };
    //     };
    // };
    // return result;
};

// Do not edit below this line
module.exports = palindromes;
