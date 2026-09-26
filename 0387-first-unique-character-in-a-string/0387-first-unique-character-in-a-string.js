/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let index = ""
    for (let value of s) {
        if (s.lastIndexOf(value)===s.indexOf(value)) {
            return s.indexOf(value)
        } 
    }
    return -1;
   
};