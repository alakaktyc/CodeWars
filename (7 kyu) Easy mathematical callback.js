function processArray(arr, callback) {
    let array = [];
    array = arr.map(function(item) {
        return callback(item)
    });
    return array;
}