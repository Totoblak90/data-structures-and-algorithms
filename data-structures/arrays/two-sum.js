/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
 
Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
*/
const twoSums = (arrayNums, target) => {
    // Input: nums = [2,7,11,15], target = 9
    // Check inputs are valid
    if (checkInputIsValid(arrayNums, target)) {
        const result = [];
        const object = {};
        for (let i = 0; i < arrayNums.length; i++) {
            if (!object[target - arrayNums[i]]) {
                object[target - arrayNums[i]] = {
                    value: target - arrayNums[i],
                    index: i
                }
            }
        }
        return result;
    }
}

const checkInputIsValid = (arrayNums, target) => {
    if (arrayNums.length <= 1) {
        throw new Error('Must pass an array of at least two integers');
    }
    for (let i = 0; i < arrayNums.length; i++) {
        if (typeof arrayNums[i] !== 'number') {
            throw new Error('All items in the array must be integers;')
        }
    }
    if (typeof target !== 'number') {
        throw new Error('Target must be an integer')
    }

    return true;
}

console.log(
    twoSums([1, 2], 1)
)