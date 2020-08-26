function squareDigits(num){
    //may the code be with you
    const digits = num.toString().split('');
    const squaredDigits = digits.map(n => n * n);
    const squaredNumber = squaredDigits.join('');
    return +squaredNumber
}