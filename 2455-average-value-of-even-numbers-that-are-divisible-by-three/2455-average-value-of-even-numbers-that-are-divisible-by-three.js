/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let sum = 0;
    let num = 0;
    for (let value of nums) {
        if (value%6===0) {
            sum += value;
            num++
        }
    } 
    if (num===0) {
        return 0;
    }
    return Math.floor(sum/num)
};