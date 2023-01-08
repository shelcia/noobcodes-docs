---
sidebar_position: 5
tags: [facebook]
---

# Add Two Numbers II

### Problem Statement

You are given **two non-empty** linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number `0` itself.

[LeetCode link](https://leetcode.com/problems/add-two-numbers-ii/)

### Example 1:

![ex1](https://assets.leetcode.com/uploads/2021/04/09/sumii-linked-list.jpg)

```
Input: l1 = [7,2,4,3], l2 = [5,6,4]
Output: [7,8,0,7]
```

### Example 2:

```
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [8,0,7]
```

### Example 3:

```
Input: l1 = [0], l2 = [0]
Output: [0]
```

#### Constraints:

- The number of nodes in each linked list is in the range `[1, 100]`.
- `0 <= Node.val <= 9`
- It is guaranteed that the list represents a number that does not have leading zeros.

### Code

```python title="Python Code"
class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        num1 = 0
        node = l1
        while node is not None:
            num1 *= 10
            num1 += node.val
            node = node.next
        num2 = 0
        node = l2
        while node is not None:
            num2 *= 10
            num2 += node.val
            node = node.next
        r = list(str(num1 + num2))
        node = ListNode(int(r[0]))
        temp = node
        for i in range(1, len(r)):
            temp.next = ListNode(int(r[i]))
            temp = temp.next
        return node
```
