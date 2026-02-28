/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false;

    let res = 0;
    let xCopy = x;

    while (x > 0) {
        let rem = x % 10;
        res = res * 10 + rem
        x = Math.floor(x / 10);
    }

    return res === xCopy
};