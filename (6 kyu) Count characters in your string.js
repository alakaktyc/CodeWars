function count (string) {
    let obj = {};
    string.split('').forEach(function(item, index, array) {
        if (obj[item] === undefined) {
            obj[item] = 1
        } else {
            obj[item] += 1
        }
    });
    return obj;
}