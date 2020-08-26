function isPrime(num) {
    if (num < 2) {
        return false;
    }
    const lim = Math.sqrt(num);
    for (let i = 2; i <= lim; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}