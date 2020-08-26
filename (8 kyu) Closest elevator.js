function elevator(left, right, call){
    if ( Math.abs(call - right) <= Math.abs(call - left) ||  call === right) {
        return 'right'
    }
    else {
        return 'left'
    }
}