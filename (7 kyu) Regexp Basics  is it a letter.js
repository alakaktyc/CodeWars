String.prototype.isLetter = function() {
    if ((/[a-z]/i).test(this) && this.length === 1) {
        return true
    } else {
        return false
    }
}