const arrayNumbers = [1, -45, 88, 56, 0, 45, 24, -55, -12, -7, 0]

let arrayPositiveCount = [0]
let arrayNegativeCount = [0]
let arrayZeroCount = [0]
for  (let i=0; i< arrayNumbers.length; i++ ) {
    if (arrayNumbers[i] > 0){
        arrayPositiveCount++;
    } else if (arrayNumbers [i] < 0) {
        arrayNegativeCount++;
    }else {
        arrayZeroCount++;
    }
}
 console.log('Positive numbers count', arrayPositiveCount);
 console.log('Negative numbers count', arrayNegativeCount);
 console.log('Total zeros in the array', arrayZeroCount);