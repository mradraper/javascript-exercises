const sumAll = function(firstNum, secondNum) {

    let sumNums = 0;
// Before any of the numbers begin getting added together, start at 0

    if (firstNum < 0 || secondNum < 0){
        return "ERROR";
    } 
// If either of the parameters are negative numbers return ERROR

    else if (!Number.isInteger(firstNum) || !Number.isInteger(secondNum) ){
        return "ERROR";
    }
// If either of the parameters is not an integer return ERROR

    else {
        for (i = Math.min(firstNum, secondNum); i < Math.max(firstNum, secondNum) + 1; i++){
            // Start the loop with the lower of the two parameters
            // Each time through the loop, the current number will be added to the sum, the first number added to the sum, which begins at 0, will be the lower parameter
            // Go up 1 number each time through the loop then add that next number to the sum
            // Finish the loop when it goes 1 above the higher of the two parameters
            // The last number added will be the higher of the parameters
        
            sumNums += i;
            // This code adds the current number to the sum
        }
        return sumNums;
        // Return the total sum
    }
};

// Do not edit below this line
module.exports = sumAll;
