function isIntegerNumber(value) {
    return typeof value === 'number' && Number.isInteger(value);
}

const sumAll = function(first, second) {

    if (!isIntegerNumber(first) || !isIntegerNumber(second)) {
        return "ERROR";
    }

    if (first < 0 || second < 0) {
        return "ERROR";
    }

    if (first === second) {
        return 0;
    }

    let min = Math.min(first, second);
    let max = Math.max(first, second);

    let totalSum = 0;

    for (let counter=min; counter <= max; counter++) {
        totalSum += counter;
    }

    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
