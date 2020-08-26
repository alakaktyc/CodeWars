function findShort(s){
    let length = 10;
    str = s.split(' ');
    for (let i = 0; i < str.length; i++) {
        if (length > str[i].length) {
            length = str[i].length;
        }
    }
    return length;
}