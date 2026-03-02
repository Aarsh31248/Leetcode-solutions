/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (arr) {
    let num = 0
    for (let i = 0; i < arr.length; i++) {
        num = num ^ arr[i]
    }
    return num
};