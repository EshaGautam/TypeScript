"use strict";
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const buttonElement = document.querySelector('button');
function Add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
const numResult = [];
const stringResult = [];
function printObj(resultObj) {
    console.log(resultObj.val);
}
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener('click', () => {
    const num1 = num1Input.value;
    const num2 = num2Input.value;
    const numberresult = Add(+num1, +num2);
    numResult.push(numberresult);
    const textresult = Add(num1, num2);
    stringResult.push(textresult);
    printObj({ val: numberresult, timestamp: new Date() });
    console.log(numberresult);
});
// console.log(Add('1', '2')) this will throw error as type arguments are not of type number
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('it worked');
    }, 1000);
});
myPromise.then((res) => {
    console.log(res.split('w'));
});
