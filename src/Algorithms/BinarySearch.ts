
const sortedNumberArray: number[] = [1,2,3,5,7,9,11,13,15,17];
const targetValue = 11;

function binarySearch(binArray: number[], targetValue: number): number {
    let left =0;
    let right = binArray.length-1;

    while(left <= right)
    {
        const mid = Math.floor((left + right) /2);

        if(binArray[mid] === targetValue){return mid}
        else if(binArray[mid]! < targetValue){left=mid+1}
        else{right = mid - 1}
    }
    return -1;
}


let index = binarySearch(sortedNumberArray,targetValue);
if(index !== -1){console.log(`Target value ${targetValue} was found at ${index}`)}
else {console.log(`The target value ${targetValue} was not found in the array.`)}