/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (arr) {
    let res = null;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (count === 0) {
            res = arr[i]
        }

        if (arr[i] === res) {
            count++
        } else {
            count--
        }
    }
    return res;
};