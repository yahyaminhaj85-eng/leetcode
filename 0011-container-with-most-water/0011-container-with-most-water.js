/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let area = 0;

    for (let i = 0; left < right; i++) {
        let length = right - left;
        let num = Math.min(height[left], height[right]);
        let currentArea = num * length;

        area = Math.max(area, currentArea);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return area
    
};