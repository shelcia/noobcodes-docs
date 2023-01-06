---
sidebar_position: 40
tags: [LinkedIn]
---

# Linked List Cycle

### Problem Statement

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

[Leetcode Link](https://leetcode.com/problems/linked-list-cycle/)

#### Example 1:

```
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
```

#### Example 2:

```
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
```

#### Example 3:

```
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
```

#### Constraints:

- The number of the nodes in the list is in the range [0, 10<sup>4</sup>].
- -10<sup>5</sup> <= Node.val <= 10<sup>5</sup>
- pos is -1 or a valid index in the linked-list.

### Code

```python title="Python Code"

class Solution(object):
    def hasCycle(self, head):
        """
        :type head: ListNode
        :rtype: bool
        """
        if not head or not head.next or not head.next.next:
            return False

        walker, runner = head, head

        while walker.next and runner.next and runner.next.next:
            walker = walker.next
            runner = runner.next.next
            if walker == runner:
                return True

        return False
```
