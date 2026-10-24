/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let a = 0;
    let b = 0;
    for (let i = 0; i < nums.length; i++) {
        let current = Math.max(b, a + nums[i]);
        a = b;
        b = current;
    }
    return b;
};