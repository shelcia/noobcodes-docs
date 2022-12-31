---
sidebar_position: 123
tags: [facebook]
---

# Reverse Linked List II

### Problem Statement

Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

[Leetcode link](https://leetcode.com/problems/reverse-linked-list-ii/)

#### Example 1:

```
Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]
```

#### Example 2:

```
Input: head = [5], left = 1, right = 1
Output: [5]
```

#### Constraints:

- The number of nodes in the list is n.
- 1 <= n <= 500
- -500 <= Node.val <= 500
- 1 <= left <= right <= n

### Code

```python title="Python Code"
class Solution:
    # @param head, a ListNode
    # @param m, an integer
    # @param n, an integer
    # @return a ListNode
    def reverseBetween(self, head, m, n):
        if m == n:
            return head

        dummyNode = ListNode(0)
        dummyNode.next = head
        pre = dummyNode

        for i in range(m - 1):
            pre = pre.next

        # reverse the [m, n] nodes
        reverse = None
        cur = pre.next
        for i in range(n - m + 1):
            next = cur.next
            cur.next = reverse
            reverse = cur
            cur = next

        pre.next.next = cur
        pre.next = reverse

        return dummyNode.next

```
