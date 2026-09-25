/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let word = ""
    for(let value of s) {
        value = value.toLowerCase();
        word += value
    }
    return word
};