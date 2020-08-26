function isPalindrome(line) {
    if (typeof (line) === 'number') {
        return line === Number(line.toString().split('').reverse().join(''));
    }
    return line === line.split('').reverse().join('');
}