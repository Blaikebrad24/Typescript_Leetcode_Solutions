/**
 * Given a 0 indexed array of nums of length n 
 * distinct difference array of nums is an array diff of length n
 * such that diff[i] is equal to the number of distinct elements in the 
 * suffix nums[i+1, ..., n-1] subtracted from the number of distinct elements in the prefix
 * nums [0, ...,i]
 * Return the distinct difference 
 */

import { count } from "console";

// Example input: nums [1,2,3,4,5]
// Example output: nums 

function distinctDiff(nums: number[]) : number[]
{
    let diff: number[] = [nums.length];
   for(let i = 0; i < nums.length; i++)
    {
        let countPrefix = countDistinctElements(nums, 0, i);
        let countSuffix = countDistinctElements(nums, i+1, nums.length-1)
        diff[i] = countPrefix - countSuffix;
    }

    return diff;
}

function countDistinctElements(nums: number[], start: number, end: number) : number
{
    // need a boolean array to keep track of duplicates since they are not 
    // distinct
    let visitedArray: Array<boolean> = [];
    let count = 0;

    for(let i=start; i<=end; i++)
        {
            if(!visitedArray[nums[i]!])
                {
                    visitedArray[nums[i]!] = true;
                    count++;
                }
        }

    return count;
}

function distinctDifferenceArray()
{
    let numsArray: number[] = [1,2,3,4,5];
    console.log(distinctDiff(numsArray));
}

distinctDifferenceArray();