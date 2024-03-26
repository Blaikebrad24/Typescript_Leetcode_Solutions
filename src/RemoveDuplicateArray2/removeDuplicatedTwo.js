"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testNumbers = [0, 0, 1, 1, 1, 1, 2, 3, 3];
function removeDuplicates(nums) {
    if (nums.length <= 2) {
        return nums.length;
    }
    var i = 0;
    nums.forEach(function (n) {
        if (i < 2 || n != nums[i - 2]) {
            nums[i++] = n;
        }
    });
    console.log(nums);
    return i;
}
console.log(removeDuplicates(testNumbers));
