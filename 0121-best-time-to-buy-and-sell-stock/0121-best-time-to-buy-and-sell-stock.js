/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (arr) {
    let min = arr[0];
    let profit = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }

        if ((arr[i] - min) > profit) {
            profit = arr[i] - min
        }
    }
    return profit
};