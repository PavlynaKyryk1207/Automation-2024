const arrayNum = [1, 2, 3, 4, 5, 6, 7]
const newArray = arrayNum.map(myFunction)

function myFunction(numbers, index){
    return numbers * index
}
console.log('Myltiply numbers one by one', newArray)