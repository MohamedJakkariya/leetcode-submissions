// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2 ** 31, 2 ** 31 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Constraints:
// -2^31 <= x <= 2^31 - 1

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const isNegative = x < 0;

  // TODO: Convert the value int => String, and use built in methods to reverse it
  const rx = +`${isNegative ? Math.abs(x) : x}`.split('').reverse().join('');

  // TODO: Check the constraint
  if (rx >= 2 ** 31 - 1) return 0;

  return isNegative ? -rx : rx;
};

// Example 1:
// Input: x = 123
// Output: 321
console.log(reverse(123));

// Example 2:
// Input: x = -123
// Output: -321
console.log(reverse(-123));

// Example 3:
// Input: x = 120
// Output: 21
console.log(reverse(120));

// Example 4:
// Input: x = 0
// Output: 0
console.log(reverse(0));

// Wrong answer
console.log(reverse(-1534236469));

// Success
// Details
// Runtime: 92 ms, faster than 64.06% of JavaScript online submissions for Reverse Integer.
// Memory Usage: 40.5 MB, less than 32.20% of JavaScript online submissions for Reverse Integer.
