function flyBy(lamps, drone){
    let arrLamps = lamps.split('');
    let arrDrone = drone.split('');
    let result;
    result = arrLamps.map((item, index) => {
        if (index === arrDrone.length || index > arrDrone.length) {
            return item
        }
        return 'o'
    } );
    return result.join('')
}
