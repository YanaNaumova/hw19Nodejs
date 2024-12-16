"use strict";
const sumEvenNumbers = (arr) => {
    const newArr = arr.filter((el) => el % 2 === 0);
    return newArr.reduce((acc, el) => acc + el);
};
console.log(sumEvenNumbers([3, 5, 3, 4, 1, 6]));
const stringToBooleanFunction = (str) => {
    return str.length > 0 ? true : false;
};
console.log(stringToBooleanFunction("i"));
const compareStrings = (str1, str2) => {
    return str1.length === str2.length ? true : false;
};
console.log(compareStrings("hi", "ja"));
function getLastElement(arr) {
    return arr[arr.length - 1];
}
console.log(getLastElement([2, 3, 4, 5]));
console.log(getLastElement(["a", "b", "c", "d"]));
function makeTriple(arg1, arg2, arg3) {
    return [arg1, arg2, arg3];
}
console.log(makeTriple(2, 3, 4));
console.log(makeTriple("a", "b", "c"));
