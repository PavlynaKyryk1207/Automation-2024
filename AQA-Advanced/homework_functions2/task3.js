function divide(numerator, denominator){
    try{
        if (isNaN(numerator) || isNaN(denominator)){
            throw new Error('Both numerator and denominator must be numbers');
        }
    else (denominator === 0);{
        throw new Error('Denominator cannot be zero');
        
    }

} 
catch(error) {
        console.log('Error:', error.message);
        return numerator / denominator;

    }finally{
        console.log('Work completed');
    }
}
console.log(divide(10, 2));
console.log(divide(4, 0));
console.log(divide('abc', 2));
