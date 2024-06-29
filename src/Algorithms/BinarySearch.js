var sortedNumberArray = [1, 2, 3, 5, 7, 9, 11, 13, 15, 17];
var targetValue = 11;
function binarySearch(binArray, targetValue) {
    var left = 0;
    var right = binArray.length - 1;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (binArray[mid] === targetValue) {
            return mid;
        }
        else if (binArray[mid] < targetValue) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return -1;
}
var index = binarySearch(sortedNumberArray, targetValue);
if (index !== -1) {
    console.log("Target value ".concat(targetValue, " was found at ").concat(index));
}
else {
    console.log("The target value ".concat(targetValue, " was not found in the array."));
}
