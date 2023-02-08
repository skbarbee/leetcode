/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    //loop through an array
    //if it's zero move to the end 
    let size  = nums.length
    for (let i=0; i<size; i++){
        
        if(nums[i]===0){
        
            nums.splice(i,1)
            nums.push(0)
            i --
            size --
            }
        }
       
};