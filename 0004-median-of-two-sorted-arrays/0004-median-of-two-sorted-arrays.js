/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
    //merge and sort arrays
    const newArray = nums1.concat(nums2).sort((a,b)=> a-b)
    const mid = Math.floor(newArray.length/2)
    // if array is odd number
    if (newArray.length %2 !== 0){
        return newArray[mid]
    }
    // if array is even number
    else{
        return (newArray[mid] + newArray[mid-1])/2
    }
};