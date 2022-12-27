---
sidebar_position: 42
tags: [amazon]
---

# Remove Duplicates from Sorted List II

### Problem Statement

Given the `head` of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.
[Leetcode Link](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii)

#### Example 1:

![Image of Yaktocat](https://assets.leetcode.com/uploads/2021/01/04/linkedlist1.jpg)

```

Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]
```

#### Constraints:

- The number of nodes in the list is in the range `[0, 300]`.
- `-100 <= Node.val <= 100`
- The list is guaranteed to be sorted in ascending order.

### Code

```python title="Python Code"
class Solution:
    def deleteDuplicates(self, head):
        dummy = pre = ListNode(0)
        dummy.next = head
        while head and head.next:
            if head.val == head.next.val:
                while head and head.next and head.val == head.next.val:
                    head = head.next
                head = head.next
                pre.next = head
            else:
                pre = pre.next
                head = head.next
        return dummy.next


```
