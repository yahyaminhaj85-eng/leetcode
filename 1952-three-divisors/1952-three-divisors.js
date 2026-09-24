/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    let arr = []
    for (let i=1;i<=n;i++){
        if ( n/i === Math.floor(n/i)){
            arr.push(i)
        }
    } 
    if (arr.length===3) {
        return true
    } else {
        return false
    }
};