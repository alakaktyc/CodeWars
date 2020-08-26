function fakeBin(x){
    let arr = x.split('');
    let result = '';
    for (let i = 0; i < arr.length; i++){
        if (arr[i] >= 5) {
            result += 1
        } else {
            result += 0
        }
    }
    return result
}