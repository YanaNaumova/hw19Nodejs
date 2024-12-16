const sumEvenNumbers = (arr: number[]): number => {
  const newArr = arr.filter((el) => el % 2 === 0);
  return newArr.reduce((acc, el) => acc + el);
};

console.log(sumEvenNumbers([3, 5, 3, 4, 1, 6]));

interface IStringToBooleanFunction {
  (str: string): boolean;
}

const stringToBooleanFunction: IStringToBooleanFunction = (str) => {
  return str.length > 0 ? true : false;
};

console.log(stringToBooleanFunction("i"));

type ICompareStrings = {
  (str1: string, str2: string): boolean;
};

const compareStrings: ICompareStrings = (str1, str2) => {
  return str1.length === str2.length ? true : false;
};

console.log(compareStrings("hi", "ja"));

function getLastElement<T>(arr: T[]): T {
  return arr[arr.length - 1];
}

console.log(getLastElement([2, 3, 4, 5]));
console.log(getLastElement(["a", "b", "c", "d"]));

function makeTriple<T>(arg1: T, arg2: T, arg3: T): T[] {
  return [arg1, arg2, arg3];
}

console.log(makeTriple(2, 3, 4));
console.log(makeTriple("a", "b", "c"));
