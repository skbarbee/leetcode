/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    for (let i=0; i < nums.length; i++){
        // console.log('this is num', nums[i], 'this is i:', i, 'this is target:', target)
        if(nums[i]===target){
            return i
        }

    }
    return -1
};