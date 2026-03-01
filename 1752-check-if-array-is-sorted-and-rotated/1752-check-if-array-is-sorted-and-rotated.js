/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (arr) {
    let drops = 0;
    let n = arr.length
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[(i + 1) % n]) {
            drops++;
        }
    }
    return drops <= 1
};