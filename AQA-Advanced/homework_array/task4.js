const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = arrayNumber.filter(numbers =>  numbers % 2 === 0 );
evenNumbers.sort( (a, b) => b - a);

console.log('Even numbers sorted', evenNumbers);
