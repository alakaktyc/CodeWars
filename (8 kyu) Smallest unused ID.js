function sortArray(array) {
    array.sort(function(a, b) {
        return a - b;
    });
}

function nextId(ids){
    sortArray(ids);
    if (ids.length !== 0) {
        if (ids[0] !== 0) {
            return 0
        }
    }

    for (let i = 0; i < ids.length; i++) {

        if (ids[i + 1] - ids[i] !== 1 && ids[i + 1] !== ids[i]) {
            return ids[i] + 1;
        }
    }
    return ids.length
}