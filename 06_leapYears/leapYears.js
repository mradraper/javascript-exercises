const leapYears = function(testYear) {
    if (testYear % 4 === 0 && testYear % 100 === 0 && testYear % 400 === 0) {
        return true;
    }
    // Is the year divisible by 4, divisible by 100, and divisible by 400? Then it is a leap year.

    else if (testYear % 4 === 0 && testYear % 100 === 0 && testYear % 400 != 0) {
        return false;
    }
    // Is the year divisible by 4, divisible by 100, but not divisible by 400? Then it is not a leap year.

    else if (testYear % 4 === 0 && testYear % 100 != 0 ) {
        return true;
    }
    // Is the year divisible by 4 and not by 100? Then it is a leap year.

    else {
        return false;
    }
    // Otherwise (if it is not divisible by 4), it is not a leap year.
    



};

// Do not edit below this line
module.exports = leapYears;
