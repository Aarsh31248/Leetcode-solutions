/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (arr) {
    let l = 0;
    let r = arr.length - 1;
    let i = 0;

    while (i <= r) {
        if (arr[i] === 2) {
            let temp = arr[i];
            arr[i] = arr[r];
            arr[r] = temp;
            r = r - 1;
        } else if (arr[i] === 0) {
            let temp = arr[i];
            arr[i] = arr[l];
            arr[l] = temp;
            l = l + 1
            i++;
        } else {
            i++
        }

    }
};