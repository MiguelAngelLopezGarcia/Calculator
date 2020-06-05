let calculatorScreenArray = [];

let previousResoult = [];

const button0 = document.querySelector('#b0');
const button1 = document.querySelector('#b1');
const button2 = document.querySelector('#b2');
const button3 = document.querySelector('#b3');
const button4 = document.querySelector('#b4');
const button5 = document.querySelector('#b5');
const button6 = document.querySelector('#b6');
const button7 = document.querySelector('#b7');
const button8 = document.querySelector('#b8');
const button9 = document.querySelector('#b9');
const buttonDot = document.querySelector('#bDot');
const buttonDivide = document.querySelector('#divide');
const buttonMultiply = document.querySelector('#multiply');
const buttonSum = document.querySelector('#sum');
const buttonMinus = document.querySelector('#minus');
const buttonEqual = document.querySelector('#equal');
const buttonDel = document.querySelector('#del');
const buttonClear = document.querySelector('#clear');

window.addEventListener('keydown', findCharCode);

function findCharCode(e) {
    if (e.key == 0){
        addNumber0();
    } else if (e.key == 1) {
        addNumber1();
    } else if (e.key == 2) {
        addNumber2();
    } else if (e.key == 3) {
        addNumber3();
    } else if (e.key == 4) {
        addNumber4();
    } else if (e.key == 5) {
        addNumber5();
    } else if (e.key == 6) {
        addNumber6();
    } else if (e.key == 7) {
        addNumber7();
    } else if (e.key == 8) {
        addNumber8();
    } else if (e.key == 9) {
        addNumber9();
    } else if (e.key == ".") {
        addDot();
    } else if (e.key == "-") {
        addMinus();
    } else if (e.key == "+") {
        addSum();
    } else if (e.key == "*") {
        addMultiply();
    } else if (e.key == "/") {
        addDivide();
    } else if (e.keyCode == 13) {
        equal();
    } else if (e.keyCode == 8) {
        deleteFromArray();
    } else if (e.keyCode == 46) {
        clearScreen();
    } 
}


button0.addEventListener('mousedown', addNumber0);
button1.addEventListener('mousedown', addNumber1);
button2.addEventListener('mousedown', addNumber2);
button3.addEventListener('mousedown', addNumber3);
button4.addEventListener('mousedown', addNumber4);
button5.addEventListener('mousedown', addNumber5);
button6.addEventListener('mousedown', addNumber6);
button7.addEventListener('mousedown', addNumber7);
button8.addEventListener('mousedown', addNumber8);
button9.addEventListener('mousedown', addNumber9);
buttonDot.addEventListener('mousedown', addDot);
buttonDivide.addEventListener('mousedown', addDivide);
buttonMultiply.addEventListener('mousedown', addMultiply);
buttonSum.addEventListener('mousedown', addSum);
buttonMinus.addEventListener('mousedown', addMinus);
buttonEqual.addEventListener('mousedown', equal);
buttonDel.addEventListener('mousedown', deleteFromArray);
buttonClear.addEventListener('mousedown', clearScreen);


function addNumber0() {
    if (previousResoult.length > 0) {
        previousResoult = [];
        calculatorScreenArray.push("0");
    } else if (calculatorScreenArray.length == 0) {
        calculatorScreenArray.push("0", "0")
    } else if (calculatorScreenArray.length < 28) {
        calculatorScreenArray.push("0");
    }
    
    refreshScreen();
};

function addNumber1() {
    if (previousResoult.length > 0) {
        previousResoult = [];
        calculatorScreenArray.push("1");
    } else if (calculatorScreenArray.length < 28) {
        calculatorScreenArray.push("1");
    }
    
    refreshScreen();
};

function addNumber2() {
    if (previousResoult.length > 0) {
        previousResoult = [];
        calculatorScreenArray.push("2");
    } else if (calculatorScreenArray.length < 28) {
        calculatorScreenArray.push("2");
    }
    
    refreshScreen();
};

function addNumber3() {
    if (previousResoult.length > 0) {
        previousResoult = [];
        calculatorScreenArray.push("3");
    } else if (calculatorScreenArray.length < 28) {
        calculatorScreenArray.push("3");
    }
    
    refreshScreen();
};

function addNumber4() {
    if (previousResoult.length > 0) {
        previousResoult = [];
        calculatorScreenArray.push("4");
    } else if (calculatorScreenArray.length < 28) {
        calculatorScreenArray.push("4");
    }
    
    refreshScreen();
};

function addNumber5() {
    if (previousResoult.length > 0) {
        previousResoult = [];
        calculatorScreenArray.push("5");
    } else if (calculatorScreenArray.length < 28) {
        calculatorScreenArray.push("5");
    }
    
    refreshScreen();
};

function addNumber6() {
    if (previousResoult.length > 0) {
        previousResoult = [];
        calculatorScreenArray.push("6");
    } else if (calculatorScreenArray.length < 28) {
        calculatorScreenArray.push("6");
    }
    
    refreshScreen();
};

function addNumber7() {
    if (previousResoult.length > 0) {
        previousResoult = [];
        calculatorScreenArray.push("7");
    } else if (calculatorScreenArray.length < 28) {
        calculatorScreenArray.push("7");
    }
    
    refreshScreen();
};

function addNumber8() {
    if (previousResoult.length > 0) {
        previousResoult = [];
        calculatorScreenArray.push("8");
    } else if (calculatorScreenArray.length < 28) {
        calculatorScreenArray.push("8");
    }
    
    refreshScreen();
};

function addNumber9() {
    if (previousResoult.length > 0) {
        previousResoult = [];
        calculatorScreenArray.push("9");
    } else if (calculatorScreenArray.length < 28) {
        calculatorScreenArray.push("9");
    }
    
    refreshScreen();
};

function addDot() {
    const checkForDots = findDot();
    if (checkForDots == true) {
        return
    } else if (checkForDots == false && previousResoult.length > 0) {
        previousResoult = [];
        calculatorScreenArray.push(".");
    } else if (checkForDots == false && calculatorScreenArray.length < 28) {
        calculatorScreenArray.push(".");
    }
    
    refreshScreen();
};

function addDivide() {
    if (previousResoult.length > 0) {
        calculatorScreenArray.push(...previousResoult);
        calculatorScreenArray.push("/")
        previousResoult = [];
    } else if (calculatorScreenArray.length == 0) {
        calculatorScreenArray.push("0");
        calculatorScreenArray.push("/")
    } else if (calculatorScreenArray[calculatorScreenArray.length-1] == "/" || calculatorScreenArray[calculatorScreenArray.length-1] == "*" || 
    calculatorScreenArray[calculatorScreenArray.length-1] == "-" || calculatorScreenArray[calculatorScreenArray.length-1] == "+" && calculatorScreenArray.length < 28){
        calculatorScreenArray.pop();
        if (calculatorScreenArray[calculatorScreenArray.length-1] == "/" || calculatorScreenArray[calculatorScreenArray.length-1] == "*" || 
    calculatorScreenArray[calculatorScreenArray.length-1] == "-" || calculatorScreenArray[calculatorScreenArray.length-1] == "+"){
        calculatorScreenArray.pop();
        calculatorScreenArray.push("/");
        }else {
        calculatorScreenArray.push("/")
        }
    } else if (calculatorScreenArray.length < 28) {
        calculatorScreenArray.push("/");
    };

    refreshScreen();
};

function addMultiply() {
    if (previousResoult.length > 0) {
        calculatorScreenArray.push(...previousResoult);
        calculatorScreenArray.push("*")
        previousResoult = [];
    } else if (calculatorScreenArray.length == 0) {
        calculatorScreenArray.push("0");
        calculatorScreenArray.push("*")
    } else if (calculatorScreenArray[calculatorScreenArray.length-1] == "/" || calculatorScreenArray[calculatorScreenArray.length-1] == "*" || 
    calculatorScreenArray[calculatorScreenArray.length-1] == "-" || calculatorScreenArray[calculatorScreenArray.length-1] == "+" && calculatorScreenArray.length < 28){
        calculatorScreenArray.pop();
        if (calculatorScreenArray[calculatorScreenArray.length-1] == "/" || calculatorScreenArray[calculatorScreenArray.length-1] == "*" || 
    calculatorScreenArray[calculatorScreenArray.length-1] == "-" || calculatorScreenArray[calculatorScreenArray.length-1] == "+"){
        calculatorScreenArray.pop();
        calculatorScreenArray.push("*");
        }else {
        calculatorScreenArray.push("*")
        }
    } else if (calculatorScreenArray.length < 28) {
        calculatorScreenArray.push("*");
    };

    refreshScreen();
};

function addSum() {
    if (previousResoult.length > 0) {
        calculatorScreenArray.push(...previousResoult);
        calculatorScreenArray.push("+")
        previousResoult = [];
    } else if (calculatorScreenArray.length == 0) {
        calculatorScreenArray.push("0");
        calculatorScreenArray.push("+")
    } else if (calculatorScreenArray[calculatorScreenArray.length-1] == "/" || calculatorScreenArray[calculatorScreenArray.length-1] == "*" || 
    calculatorScreenArray[calculatorScreenArray.length-1] == "-" || calculatorScreenArray[calculatorScreenArray.length-1] == "+" && calculatorScreenArray.length < 28){
        calculatorScreenArray.pop();
        if (calculatorScreenArray[calculatorScreenArray.length-1] == "/" || calculatorScreenArray[calculatorScreenArray.length-1] == "*" || 
    calculatorScreenArray[calculatorScreenArray.length-1] == "-" || calculatorScreenArray[calculatorScreenArray.length-1] == "+"){
        calculatorScreenArray.pop();
        calculatorScreenArray.push("+");
        }else {
        calculatorScreenArray.push("+")
        }
    } else if (calculatorScreenArray.length < 28) {
        calculatorScreenArray.push("+");
    };

    refreshScreen();
};

function addMinus() {
    if (previousResoult.length > 0) {
        calculatorScreenArray.push(...previousResoult);
        calculatorScreenArray.push("-")
        previousResoult = [];
    } else if (calculatorScreenArray.length == 0) {
        calculatorScreenArray.push("0");
        calculatorScreenArray.push("-")
    } else if (calculatorScreenArray[calculatorScreenArray.length-1] == "-" || calculatorScreenArray[calculatorScreenArray.length-1] == "+" && calculatorScreenArray.length < 28){
        calculatorScreenArray.pop();
        calculatorScreenArray.push("-")
    } else if (calculatorScreenArray.length < 28) {
        calculatorScreenArray.push("-");
    };

    refreshScreen();
};

function equal() {
    solve(calculatorScreenArray);
}

function solve(array) {

    while (array[array.length-1] == "-" || array[array.length-1] == "+" || array[array.length-1] == "*" || array[array.length-1] == "/") {
        calculatorScreenArray.pop();
    }
    
    while (array.some(isSlash) == true) {
        solveDivision(array);
    };

    while (array.some(isMultiply) == true) {
        solveMultiply(array);
    };

    while (array.some(isMinus) == true) {
        solveMinus(array);
    };

    while (array.some(isPlus) == true) {
        solvePlus(array);
    };
    
    refreshScreenAfterSolution();
};

function deleteFromArray() {
    if (previousResoult.length > 0) {
        previousResoult = [];
    }
    calculatorScreenArray.pop();
    refreshScreen();
}

function clearScreen() {
    calculatorScreenArray = [];
    previousResoult = [];
    refreshScreen();
}

function refreshScreen() {
    const screen = document.querySelector('#numberInScreen');

    if (calculatorScreenArray.length > 0) {
        const arrayToString = calculatorScreenArray.toString();
        const stringToArrayNoComa = arrayToString.replace(/,/g, "");
        const finalString = stringToArrayNoComa.toString();

        screen.textContent = finalString;
    } else {
        screen.textContent = "0"
    }
}

function refreshScreenAfterSolution() {
    const screen = document.querySelector('#numberInScreen');
    if (calculatorScreenArray.length > 0 && calculatorScreenArray.length < 2) {
        const resoult = calculatorScreenArray.toString();

        screen.textContent = resoult;

        calculatorScreenArray = [];
        previousResoult.push(resoult);
    } else if (calculatorScreenArray.length > 0 && calculatorScreenArray.length > 1) {
        const resoulToString = calculatorScreenArray.toString();
        const arrayNocoma = resoulToString.replace(/,/g, "");
        const finalResoult = arrayNocoma.toString();

        screen.textContent = finalResoult;
        calculatorScreenArray = [];
        previousResoult.push(finalResoult);
    } else if (calculatorScreenArray.length == 0 && previousResoult.length > 0) {
        const actualPreviousResoult = previousResoult.toString();

        screen.textContent = actualPreviousResoult;
    } else if (calculatorScreenArray.length == 0 && previousResoult.length == 0) {
        screen.textContent = "0";
    }
}

function solveDivision(array) {
    const slashIndex = array.indexOf("/");
    const nextSymbol = findNextSymbol(array, slashIndex);
    const previousSymbol = findPreviousSymbol(array, slashIndex);
    const sliceArray = array.slice(previousSymbol, nextSymbol);

    const stringDivision = sliceArray.toString();
    const arrayDivision = stringDivision.replace(/,/g, "");
    const stringDivisionNoComa = arrayDivision.toString();
    const finalArrayDivision = stringDivisionNoComa.split("/");

    if (parseFloat(finalArrayDivision[1]) == 0) {
        calculatorScreenArray.splice(0, calculatorScreenArray.length, "Infinite");
    } else {
        const resoult = parseFloat(finalArrayDivision[0]) / parseFloat(finalArrayDivision[1]);

        calculatorScreenArray.splice((previousSymbol), (nextSymbol-previousSymbol), resoult.toString());
    };
};

function solveMultiply(array) {
    const multiplyIndex = array.indexOf("*");
    const nextSymbol = findNextSymbol(array, multiplyIndex);
    const previousSymbol = findPreviousSymbol(array, multiplyIndex);
    const sliceArray = array.slice(previousSymbol, nextSymbol);

    const stringMultiply = sliceArray.toString();
    const arrayMultiply = stringMultiply.replace(/,/g, "");
    const stringMultiplyNoComa = arrayMultiply.toString();
    const finalArrayMultiply = stringMultiplyNoComa.split("*");

    const resoult = parseFloat(finalArrayMultiply[0]) * parseFloat(finalArrayMultiply[1]);

    calculatorScreenArray.splice((previousSymbol), (nextSymbol-previousSymbol), resoult.toString());
};

function solvePlus(array) {
    const sumIndex = array.indexOf("+");
    const nextSymbol = findNextSymbol(array, sumIndex);
    const previousSymbol = findPreviousSymbol(array, sumIndex);
    const sliceArray = array.slice(previousSymbol, nextSymbol);

    const stringSum = sliceArray.toString();
    const arraySum = stringSum.replace(/,/g, "");
    const stringSumNoComa = arraySum.toString();
    const finalArraySum = stringSumNoComa.split("+");

    const resoult = parseFloat(finalArraySum[0]) + parseFloat(finalArraySum[1]);

    calculatorScreenArray.splice((previousSymbol), (nextSymbol-previousSymbol), resoult.toString());
};

function solveMinus(array) {
    const minusIndex = array.indexOf("-");
    const nextSymbol = findNextSymbol(array, minusIndex);
    const previousSymbol = findPreviousSymbol(array, minusIndex);
    const sliceArray = array.slice(previousSymbol, nextSymbol);

    const newMinusIndex = sliceArray.indexOf("-");
    const firstNumber = sliceArray.slice(0, newMinusIndex);
    const firstNumberString = firstNumber.toString();
    const arrayFristNumber = firstNumberString.replace(/,/g, "");
    const firstNumberStringNoComa = arrayFristNumber.toString();
    const firstNumberInt = parseFloat(firstNumberStringNoComa);
    const secondNumber = sliceArray.slice((newMinusIndex+1), sliceArray.length);
    const secondNumberString = secondNumber.toString();
    const arraySecondNumber = secondNumberString.replace(/,/g, "");
    const secondNumberStringNoComa = arraySecondNumber.toString();
    const secondNumberInt = parseFloat(secondNumberStringNoComa);


    const resoult = firstNumberInt - secondNumberInt;

    calculatorScreenArray.splice((previousSymbol), (nextSymbol-previousSymbol), resoult.toString());
};

function findNextSymbol(array, begginingNumber) {
    const slashNumber = array.indexOf("/", (begginingNumber+2));
    const multiplyNumber = array.indexOf("*", (begginingNumber+2));
    const sumNumber = array.indexOf("+", (begginingNumber+2));
    const minusNumber = array.indexOf("-", (begginingNumber+2));

    const arrayToSort = [slashNumber, multiplyNumber, sumNumber, minusNumber];
    const arraySorted = arrayToSort.sort(function(a, b){return a-b});

    if (arraySorted[0] > 0) {
        return arraySorted[0];
    } else if (arraySorted[0] < 0 && arraySorted[1] > 0) {
        return arraySorted[1];
    } else if (arraySorted[1] < 0 && arraySorted[2] > 0) {
        return arraySorted[2];
    } else if (arraySorted[2] < 0 && arraySorted[3] > 0) {
        return arraySorted[3];
    } else {
        return array.length;
    };
};

function findPreviousSymbol(array, endNumber) {
    const newArray = array.slice(0, endNumber);
    const reversedArray = newArray.reverse();
    
    const slashNumber = reversedArray.indexOf("/");
    const multiplyNumber = reversedArray.indexOf("*");
    const sumNumber = reversedArray.indexOf("+");
    const minusNumber = reversedArray.indexOf("-");

    const arrayToSort = [slashNumber, multiplyNumber, sumNumber, minusNumber];
    const arraySorted = arrayToSort.sort(function(a, b){return a-b});

    if (arraySorted[0] > 0) {
        return endNumber - arraySorted[0];
    } else if (arraySorted[0] < 0 && arraySorted[1] > 0) {
        return endNumber - arraySorted[1];
    } else if (arraySorted[1] < 0 && arraySorted[2] > 0) {
        return endNumber - arraySorted[2];
    } else if (arraySorted[2] < 0 && arraySorted[3] > 0) {
        return endNumber - arraySorted[3];
    } else {
        return 0;
    };
};

function findDot() {
    const newArray = calculatorScreenArray.slice(0, calculatorScreenArray.length)
    const reversedArray = newArray.reverse();
    const checkDot = reversedArray.indexOf(".");
    
    if (checkDot == -1) {
        return false;
    } else if (checkDot !== -1) {
        const slashNumber = reversedArray.indexOf("/");
        const multiplyNumber = reversedArray.indexOf("*");
        const sumNumber = reversedArray.indexOf("+");
        const minusNumber = reversedArray.indexOf("-");

        if (slashNumber > 0 && checkDot < slashNumber) {
            return true;
        } else if (multiplyNumber > 0 && checkDot < multiplyNumber) {
            return true;
        } else if (sumNumber > 0 && checkDot < sumNumber) {
            return true;
        } else if (minusNumber > 0 && checkDot < minusNumber) {
            return true;
        } else  if (multiplyNumber < 0 && sumNumber < 0 && minusNumber < 0 && slashNumber < 0) {
            return true
        } else {
            return false
        }
    }
};

function isPlus(word) {
    return word == "+";
};

function isMultiply(word) {
    return word == "*";
};

function isSlash(word) {
    return word == "/";
};

function isMinus(word) {
    return word == "-";
};