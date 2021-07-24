/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const result = []
    
     // TODO: 1. Map through Each element and filter the exist value
     nums.forEach((value, vi) => {
         const check_pair = nums.findIndex((n, i) => n + value === target && vi !== i); 
  
         if(check_pair !== -1) result.push(check_pair)
     });
 
     return result.reverse(); 
 };
 
 console.log(twoSum([2,7,11,15], 9))
 console.log(twoSum([3,2,4], 6))
 console.log(twoSum([3,3], 6))
 
 
 