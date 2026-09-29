/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let length = 0;
    s = s.trim().split(" ")
    let x = s.at(-1).split("");
    return x.length
};