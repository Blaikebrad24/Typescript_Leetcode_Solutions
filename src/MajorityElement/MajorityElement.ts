/**
 * Gicen an array nums of size n, return the majority element
 * The majority element is the element that appears more than [n/2]
 * times. You may assume that the majority element alaways exists in the array
 */

function majorityElement(nums: number[]): number {


    // [2,2,1,1,1,2,2]

    // sorts the array is ascending order
    const sortedNums: number[] = nums.sort((a,b) => a-b);
    let middleIndex = 0;

    if(sortedNums.length === 1)
        {
            return sortedNums[0]!;
        }else if(sortedNums.length % 2 === 0)
        {
                middleIndex = sortedNums.length/2;
        }
        else{
            middleIndex = (sortedNums.length-1)/2
        }




    return middleIndex;
}

const inputArray: number[] = [2,2,1,1,1,2,2,3,3,4,5,5,5,3,5,5,5];
console.log(majorityElement(inputArray));