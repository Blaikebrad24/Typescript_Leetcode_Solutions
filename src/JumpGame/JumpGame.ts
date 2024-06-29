import { start } from "repl";

let jumpNumbers: number[] = [2,3,1,0,4];


function canJump(nums: number[]): boolean {

    let goodIndex = nums.length-1;
    for(let i=nums.length-1; i>=0; i--)
    {
        if(i + nums[i]! >= goodIndex)
        {
            goodIndex = i;
        }
    }
    

    return Boolean(goodIndex==0);
}
console.log(canJump(jumpNumbers))

function jump(nums: number[]): number {
    
    
    return 1;
}



