---
sidebar_position: 114
tags: [facebook]
---

# Remove Nth Node From End of List

### Problem Statement

Given the head of a linked list, remove the nth node from the end of the list and return its head.

[Leetcode link](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

#### Example 1:

```
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
```

#### Example 2:

```
Input: head = [1], n = 1
Output: []
```

#### Example 3:

```
Input: head = [1,2], n = 1
Output: [1]
```

#### Constraints:

- The number of nodes in the list is sz.
- 1 <= sz <= 30
- 0 <= Node.val <= 100
- 1 <= n <= sz

### Code

```python title="Python Code"
class Solution:
    def removeNthFromEnd(self, head, n):
        def index(node):
            if not node:
                return 0
            i = index(node.next) + 1
            if i > n:
                node.next.val = node.val
            return i
        index(head)
        return head.next

```
