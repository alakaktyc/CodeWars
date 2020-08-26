var isAnagram = function(test, original) {
    if (test.length !== original.length) {
        return false
    }

    let sumTest = 0;
    let sumOrginal = 0;

    let testLow = test.toLowerCase();
    let originalLow = original.toLowerCase();

    let index;
    for (let i = 0; i < test.length; i++) {
        index = testLow.charCodeAt(i);
        sumTest += index;
    }

    for (let i = 0; i < original.length; i++) {
        index = originalLow.charCodeAt(i);
        sumOrginal += index;
    }

    return sumOrginal === sumTest;
};