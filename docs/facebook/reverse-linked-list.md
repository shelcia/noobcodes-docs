---
sidebar_position: 122
tags: [facebook, linked-list]
---

# Reversed Linked List

### Problem Statement

Given the head of a singly linked list, reverse the list, and return the reversed list.

[LeetCode link](https://leetcode.com/problems/reverse-linked-list/)

#### Example 1

```
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
```

#### Example 2

```
Input: head = [1,2]
Output: [2,1]
```

#### Example 1

```
Input: head = []
Output: []
```

### Constraints:

- The number of nodes in the list is the range [0, 5000].
- -5000 <= Node.val <= 5000

### Code

```python title="Python Code"
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def reverseList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        if not head or not head.next:
            return head
        second = head.next
        reverse = self.reverseList(second)
        second.next = head
        head.next = None

        return reverse

```
