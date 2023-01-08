---
sidebar_position: 4
tags: [facebook]
---

# Add Two Numbers

### Problem Statement

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number **0** itself.

[LeetCode link](https://leetcode.com/problems/add-two-numbers/)

### Example 1:

```
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
```

### Example 2:

```
Input: l1 = [0], l2 = [0]
Output: [0]
```

### Example 3:

```
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
```

### Constraints:

- The number of nodes in each linked list is in the range `[1, 100]`.
- `0 <= Node.val <= 9`
- It is guaranteed that the list represents a number that does not have leading zeros.

### Code

```python title="Python Code"
class Solution:
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        list_node_a = l1
        list_node_b = l2
        temp_node = list_node_c = ListNode(0)
        while list_node_a or list_node_b:
            a = b = 0
            if not list_node_a:
                list_node_a = ListNode(0)
            a = list_node_a.val
            if not list_node_b:
                list_node_b = ListNode(0)
            b = list_node_b.val
            temp_add = a + b + temp_node.val
            temp_node.val = temp_add % 10
            if temp_add // 10 == 1:
                 temp_node.next = ListNode(1)
            else:
                if list_node_a.next or list_node_b.next:
                    temp_node.next = ListNode(0)

            list_node_a = list_node_a.next
            list_node_b = list_node_b.next
            temp_node = temp_node.next
        return list_node_c


```
