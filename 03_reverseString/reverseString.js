const reverseString = function(string) {

    var splitString = string.split("");
//turns the characters in the string into an array

    var reverseArray = splitString.reverse();
//reverses the order of the array of characters

    var joinArray = reverseArray.join("");
//joins together the array of characters into a string

    return joinArray;

};

// Do not edit below this line
module.exports = reverseString;
