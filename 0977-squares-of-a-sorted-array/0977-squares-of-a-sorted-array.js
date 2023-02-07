/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
let sortedArray =[]
    for(let i = 0; i< nums.length; i++){
        //find the absolute number and push to array the square number
        sortedArray.push(Math.abs(nums[i] * nums[i]))
        //console.log(sortedArray) 
        
       
    }
    //return sorted array
    return sortedArray.sort((a, b) => (a - b))
};