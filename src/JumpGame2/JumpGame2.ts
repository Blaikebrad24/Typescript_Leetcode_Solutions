/**
 * You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0]
 * Each element nums[i] represents the maximum strength from index i. In other words, you are nums[i], you can
 * jump to any nums[i+j] where: 
 *  0 <= j <= nums[i] || && i + j < n
 */

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The min number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps
// to last index

function jump(nums: number[]): number {

    let totalJumps: number = 0;
    let endIndex: number = nums.length-1;
    let jumpCoverage: number = 0;
    let lastJumpIndex: number = 0;

    if(nums.length === 0) return 0;

    for(let i=0;i<nums.length; i++)
        {
            jumpCoverage = Math.max(nums[i]! + i, jumpCoverage);
            if(i === lastJumpIndex)
                {
                    lastJumpIndex = jumpCoverage;
                    totalJumps++;

                    if(lastJumpIndex === endIndex)
                        {
                            return totalJumps;
                        }
                }
        }
    
    return totalJumps;
}

console.log(jump([2,3,1,1,4]));