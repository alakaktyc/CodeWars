function factorial(n) {
    let result;
    if (n < 0 || n > 12)
        throw new RangeError();
    if (n <= 1) {
        result = 1
    } else {
        result = n * factorial(n - 1)
    }
    return result;
}