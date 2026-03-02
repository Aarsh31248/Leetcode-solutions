/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (arr) {
    let currSum = arr[0]
    let maxSum = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > currSum + arr[i]) {
            currSum = arr[i]
        } else {
            currSum = currSum + arr[i]
        }

        if (currSum > maxSum) {
            maxSum = currSum
        }
    }
    return maxSum
};