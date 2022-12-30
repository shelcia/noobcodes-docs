---
sidebar_position: 113
tags: [facebook]
---

# Remove Linked List Elements

### Problem Statement

Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

[Leetcode link](https://leetcode.com/problems/remove-linked-list-elements/)

#### Example 1:

```
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
```

#### Example 2:

```
Input: head = [], val = 1
Output: []
```

#### Example 3:

```
Input: head = [7,7,7,7], val = 7
Output: []
```

#### Constraints:

- The number of nodes in the list is in the range [0, 10<sup>4</sup>].
- 1 <= Node.val <= 50
- 0 <= val <= 50

### Code

```python title="Python Code"
class Solution:
        def removeElements(self, head, val):
        """
        Remove all elements from a linked list of integers that have value val.
        Use the head to eliminite first n hits, and use pointer to eliminite the rest
        e.g 1->1->1->2->3->1, 1
        Head will be moved to 2, pointer will start from 3

        time complexity: O(n)
        space complexity: O(1)

        :type head: ListNode
        :type val: int
        :rtype: ListNode
        """

        # move the head to its next node if its value is equal to the input value
        while head is not None and head.val == val:
            head = head.next

        # handle null value after moving
        if head is None:
            return None

        # create a pointer reference to the head node, and loop to check its next node's value
        # if it is equal to the input val, skip that node
        cur = head
        while cur.next:
            if cur.next.val == val:
                cur.next = cur.next.next
            else:
                cur = cur.next
        return head

```
