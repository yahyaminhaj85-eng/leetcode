/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if ( n < 1) {
        return false
    } 
    let value = Math.log2(n);
    if ( value === Math.floor(value)) {
        return true
    } else {
        return false
    }
};