import test from "node:test";

let testNumbers: number[] = [0,0,1,1,1,1,2,3,3];
function removeDuplicates(nums: number[]): number {

    if(nums.length <=2){return nums.length;}
    let i: number = 0;
    nums.forEach((n) =>{
        if(i<2 || n!= nums[i-2]!)
        {
            nums[i++] = n;
        }
    })
    console.log(nums);
    return i;
}
console.log(removeDuplicates(testNumbers));