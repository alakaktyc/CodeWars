const reducer = (accumulator, currentValue) => accumulator + currentValue;
function getAverage(marks){
    //TODO : calculate the downwar rounded average of the marks array
    return Math.floor(marks.reduce((reducer))/marks.length)
}