---
sidebar_position: 22
tags: [uber, linkedlist]
---

# Linked List Cycle II

### Problem Statement

Given the `head` of a linked list, return _the node where the cycle begins. If there is no cycle, return **null**_.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to (**0-indexed**). It is `-1` if there is no cycle. **Note that `pos` is not passed as a parameter**.

**Do not modify** the linked list.

[Leetcode Link](https://leetcode.com/problems/linked-list-cycle-ii/)

#### Example 1:

![ex1](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png)

```
Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1

Explanation: There is a cycle in the linked list, where tail connects to the second node.
```

#### Example 2:

![ex2](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test2.png)

```
Input: head = [1,2], pos = 0
Output: tail connects to node index 0

Explanation: There is a cycle in the linked list, where tail connects to the first node.
```

#### Example 3:

![ex3](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test3.png)

```
Input: head = [1], pos = -1
Output: no cycle

Explanation: There is no cycle in the linked list.
```

#### Constraints:

- The number of the nodes in the `list` is in the range `[0, 10`<sup>4</sup>`]`.
- `-10`<sup>5</sup> `<= Node.val <= 10`<sup>5</sup>
- `pos` is **-1** or a valid index in the linked-list.

### Code

```python title="Python Code"

class Solution(object):
    def detectCycle(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        if head==None or head.next==None:
            return None
        slow=head.next
        fast=head.next.next
        while fast!=None and fast.next!=None and slow!=fast:
            slow=slow.next
            fast=fast.next.next
        if fast==None or fast.next==None:
            return None
        slow=head
        while slow!=fast:
            slow=slow.next
            fast=fast.next
        return slow
```
