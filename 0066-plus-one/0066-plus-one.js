/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let sum ="";
    let arr =[];
    for (let value of digits) {
        sum += value;    
    }
    sum = BigInt(sum);
    let Nsum = sum+1n;
    Nsum = String(Nsum).split("")
    for (let value of Nsum) {
         arr.push(Number(value))
    }
    return arr
};