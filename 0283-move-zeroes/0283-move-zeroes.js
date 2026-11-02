/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let arr = [];
    for (let value of nums) {
        if (value !== 0) {
            arr.push(value);
        }
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = arr[i] ?? 0;
    }

};