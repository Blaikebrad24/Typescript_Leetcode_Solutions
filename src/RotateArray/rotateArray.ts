
let numbersArray1: number[] = [1,2,3,4,5,6,7];
function rotateArray(nums: number[], k:number): number[] {
    console.log("In the rotateArray");
    let numbers = nums.length; //makes sure k is smaller than nums length
    k %= numbers;
    reverseArray(nums, 0, numbers-1); //reverse's the entire list
    reverseArray(nums, 0, k-1); //reverse first half of the array
    reverseArray(nums,k,numbers-1); // reverse first 

    return nums;
}

function reverseArray(numbers:number[], start: number, end: number): void {
    
    while(start < end)
    {
        let temp = numbers[start]!;
        numbers[start] = numbers[end]!;
        numbers[end] = temp!;
        start++;
        end--;      
    }
}

console.log(rotateArray(numbersArray1,4));