/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  //  Return dummy head's next node.
  return [];
};

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

addTwoNumbers([2, 4, 3], [5, 6, 4]);
addTwoNumbers([0], [0]);
addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]);

console.log(ListNode());
