const removeFromArray = function(arr, ...element) {

    if (element === undefined) {
        return arr;
    }

    for (const element_to_remove of element) {
        arr = arr.filter(item => item !== element_to_remove);
    }

    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
