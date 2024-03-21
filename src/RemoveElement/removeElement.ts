
/*

*/
let value: number = 5;
let numbersArray: number[] = [5,6,8,99,0,2,3,4,5,5];
function removeElement(nums: number[], val: number): number {

    let count = 0;

    for(let i =0; i< nums.length; i++)
    {
        if(nums[1]! != val)
        {
            nums[count] = nums[i]!;
            count++;
        }
    }

    return count;
};

removeElement(numbersArray,value);