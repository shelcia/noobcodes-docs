---
sidebar_position: 124
tags: [facebook, linked list, recursion]
---

# Reverse Nodes in k-Group

### Problem Statement

Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

[Leetcode link](https://leetcode.com/problems/reverse-nodes-in-k-group)

#### Example 1:

```
Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]
```

#### Example 2:

```
Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]
```

### Constraints

```
The number of nodes in the list is n.
1 <= k <= n <= 5000
0 <= Node.val <= 1000
```

### Code

```python title="Python3 Code"

    class Solution:
    def reverseKGroup(self, head: ListNode, k: int) -> ListNode:
        first = ListNode(0)
        first.next = head
        cur, fast = first, head
        while fast is not None:
            i = 0
            while i < k and fast is not None:
                fast = fast.next
                i += 1
            if i != k:
                break
            index = cur.next
            tail = fast
            while index is not fast:
                node = index
                index = index.next
                node.next = tail
                tail = node
            cur.next = tail
            while cur.next is not fast:
                cur = cur.next
        return first.next
```
