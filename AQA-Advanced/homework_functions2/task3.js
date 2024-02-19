function divide(numerator, denominator){
    try{
        if (isNaN(numerator) || isNaN(denominator)){
            throw new Error('Both numerator and denominator must be numbers');
        }
    } (denominator === 0);{
        throw new Error('Denominator cannot be zero');
    }return numerator / denominator; 
}
    catch(error) {
        console.log('Error:', error.message);
    }finally{
        console.log('Work completed');
    }
}