---
sidebar_position: 1
tags: [amazon]
---

# Add Two Numbers

### Problem Statement

You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order, and each of their nodes contains a single digit.
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
[LeetCode link](https://leetcode.com/problems/add-two-numbers/)

### Code

```jsx title="Python Code"


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:

        dummy = ListNode()

        cur = dummy
        carry = 0

        while l1 or l2 or carry:

            v1 = l1.val if l1 else 0
            v2 = l2.val if l2 else 0

            # new digit
            val = v1 + v2 + carry
            # what i value becomes 15 so get the first digit
            carry = val // 10
            val = val % 10
            cur.next = ListNode(val)

            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None
            cur = cur.next

        return dummy.next
```
