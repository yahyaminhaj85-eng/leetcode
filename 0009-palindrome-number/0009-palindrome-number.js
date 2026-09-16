/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let num = String(x);
  let pall = num.split("").reverse().join("");
  pall = Number(pall)
  if (x===pall) {
    return true;
  } else {
    return false;
  }
};