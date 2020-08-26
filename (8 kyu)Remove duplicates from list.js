function distinct(a) {
    let result = [];

    for (let str of a) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}