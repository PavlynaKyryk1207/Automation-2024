function handleNum (number, evenCallback, oddCallback) {
if (number % 2 === 0){
    evenCallback();
}else{
    oddCallback();
}
}
function handleEven(){
    console.log("Number is even");
}
function handleOdd(){
    console.log("Number is odd");
}
handleNum(7, handleEven, handleOdd);
handleEven(10, handleEven, handleOdd);
    



