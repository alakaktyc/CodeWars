function stairsIn20(s){
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        let day = s[i];
        for (let j = 0; j < day.length; j++){
            sum += day[j];
        }
    }
    return sum*20;
}