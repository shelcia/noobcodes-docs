---
sidebar_position: 91
tags: [amazon]
---

# Swap Nodes in Pairs

### Problem Statement

Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

[Leetcode link](https://leetcode.com/problems/swap-nodes-in-pairs)

#### Example 1:

![alt text](https://assets.leetcode.com/uploads/2020/10/03/swap_ex1.jpg)

```
Input: head = [1,2,3,4]
Output: [2,1,4,3]
```

#### Example 2:

```
Input: head = []
Output: []
```

#### Example 3:

```
Input: head = [1]
Output: [1]
```

#### Constraints:

- The number of nodes in the list is in the range `[0, 100]`.
- `0 <= Node.val <= 100`

### Code

```python title="Python Code"
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: ListNode) -> ListNode:
        dummy = ListNode(0)
        dummy.next = head
        current = dummy

        while current.next is not None and current.next.next is not None:
            first = current.next
            second = current.next.next
            first.next = second.next
            current.next = second
            current.next.next = first
            current = current.next.next
        return dummy.next
```
