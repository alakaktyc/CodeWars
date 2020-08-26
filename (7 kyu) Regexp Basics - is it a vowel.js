String.prototype.vowel = function() {
    if ((/[aeiou]/i).test(this) && this.length === 1){
        return true;
    }
    return false;
};