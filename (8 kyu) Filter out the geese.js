function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    let newArray = birds.filter(function(elem) {
        return geese.indexOf(elem) === -1
    })
    return newArray
}