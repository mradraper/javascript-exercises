const sumAll = function(firstNum, secondNum) {

    let sumNums = 0;

    if (firstNum < 0 || secondNum < 0){
        return "ERROR";
    } 
    
    else if (!Number.isInteger(firstNum) || !Number.isInteger(secondNum) ){
        return "ERROR";
    }

    else {

        for (i = Math.min(firstNum, secondNum); i < Math.max(firstNum, secondNum) + 1; i++){

        sumNums += i;

        }

        return sumNums;
    }
};

// Do not edit below this line
module.exports = sumAll;
