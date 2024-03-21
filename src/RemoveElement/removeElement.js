/*

*/
var value = 5;
var numbersArray = [5, 6, 8, 99, 0, 2, 3, 4, 5, 5];
function removeElement(nums, val) {
    var count = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[1] != val) {
            nums[count] = nums[i];
            count++;
        }
    }
    return count;
}
;
removeElement(numbersArray, value);
