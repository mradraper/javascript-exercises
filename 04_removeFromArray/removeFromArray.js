const removeFromArray = function(myArray, ...toBeRemoved) {
    return myArray.filter(checkItem => !toBeRemoved.includes(checkItem))
    //return the items in the array that are not found in the toBeRemoved list
};

// Do not edit below this line
module.exports = removeFromArray;
