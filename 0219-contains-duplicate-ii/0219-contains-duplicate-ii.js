/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    
let arr = new Map();

for (let i = 0; i < nums.length; i++) {
    if (arr.has(nums[i]) && i - arr.get(nums[i]) <= k) {
        return true;
    }
    arr.set(nums[i], i);
}

return false;

};