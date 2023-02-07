/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
//     //put the last i into the first spot how ever many k times
//     for(let i = 0; i<k; i++){
//         let popIntegers=nums.pop()
//         nums.unshift(popIntegers)
//         //console.log(popIntegers, "this is the new nums", nums )
//     }
// };

var rotate = function(nums, k) {
   k %= nums.length // if k is greater than nums.length then one cycle is completed that means it will remain the same and we have to remainder shifts
    
   let reverse = function(i, j){
    while(i < j){
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
        i++
        j--
      
    }
   } // suppose  ----->---> 
	reverse(0, nums.length-1); // reverse   <--<------
	 reverse(0, k-1) // reverse first part ---><----
   reverse(k, nums.length-1)// reverse second part --->----->
    
};