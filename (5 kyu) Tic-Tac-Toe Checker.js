function isSolved(board) {
    let arr = [].concat.apply([], board);
    if (arr[0] === 1 && arr[1] === 1 && arr[2] === 1
        || arr[3] === 1 && arr[4] === 1 && arr[5] === 1
        || arr[6] === 1 && arr[7] === 1 && arr[8] === 1

        || arr[0] === 1 && arr[3] === 1 && arr[6] === 1
        || arr[1] === 1 && arr[4] === 1 && arr[7] === 1
        || arr[2] === 1 && arr[5] === 1 && arr[8] === 1

        || arr[0] === 1 && arr[4] === 1 && arr[8] === 1
        || arr[2] === 1 && arr[4] === 1 && arr[6] === 1
    ) {
        return 1
    } else if (arr[0] === 2 && arr[1] === 2 && arr[2] === 2
        || arr[3] === 2 && arr[4] === 2 && arr[5] === 2
        || arr[6] === 2 && arr[7] === 2 && arr[8] === 2

        || arr[0] === 2 && arr[3] === 2 && arr[6] === 2
        || arr[1] === 2 && arr[4] === 2 && arr[7] === 2
        || arr[2] === 2 && arr[5] === 2 && arr[8] === 2

        || arr[0] === 2 && arr[4] === 2 && arr[8] === 2
        || arr[2] === 2 && arr[4] === 2 && arr[6] === 2) {
        return 2
    } else if (arr.includes(0)) {
        return -1
    } else {
        return 0
    }

}