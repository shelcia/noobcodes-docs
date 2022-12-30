---
sidebar_position: 117
tags: [facebook]
---

# Reorder List

### Problem Statement

You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

[Leetcode link](https://leetcode.com/problems/reorder-list/)

#### Example 1:

```
Input: head = [1,2,3,4]
Output: [1,4,2,3]
```

#### Example 2:

```
Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
```

#### Constraints:

- The number of nodes in the list is in the range [1, 5 * 10<sup>4</sup>].
- 1 <= Node.val <= 1000

### Code

```python title="Python Code"
    def _splitList(head):
        fast = head
        slow = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next
            fast = fast.next

        middle = slow.next
        slow.next = None

        return head, middle

    # Reverses in place a list.
    # @return Returns the head of the new reversed list
    def _reverseList(head):

    last = None
    currentNode = head

    while currentNode:
        nextNode = currentNode.next
        currentNode.next = last
        last = currentNode
        currentNode = nextNode

    return last

    # Merges in place two lists
    # @return The newly merged list.
    def _mergeLists(a, b):

        tail = a
        head = a

        a = a.next
        while b:
            tail.next = b
            tail = tail.next
            b = b.next
            if a:
                a, b = b, a

        return head


    class Solution:

        # @param head, a ListNode
        # @return nothing
        def reorderList(self, head):

            if not head or not head.next:
                return

            a, b = _splitList(head)
            b = _reverseList(b)
            head = _mergeLists(a, b)

```
