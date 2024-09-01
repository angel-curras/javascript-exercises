const repeatString = function(text, repetition=1) {

    if (repetition < 0) {
        return "ERROR";
    }

    let result = "";
    for (let count = 0; count < repetition; count++) {
        result += text;
    }

    return result;

};

// Do not edit below this line
module.exports = repeatString;
