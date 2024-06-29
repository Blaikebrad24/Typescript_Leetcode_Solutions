"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jumpNumbers = [2, 3, 1, 0, 4];
function canJump(nums) {
    var goodIndex = nums.length - 1;
    for (var i = nums.length - 1; i >= 0; i--) {
        if (i + nums[i] >= goodIndex) {
            goodIndex = i;
        }
    }
    return Boolean(goodIndex == 0);
}
console.log(canJump(jumpNumbers));
function jump(nums) {
    return 1;
}
