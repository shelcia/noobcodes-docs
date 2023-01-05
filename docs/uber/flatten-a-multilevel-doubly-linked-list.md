---
sidebar_position: 5
tags: [uber]
---

# Flatten a Multilevel Doubly Linked List

### Problem Statement

You are given a doubly linked list, which contains nodes that have a next pointer, a previous pointer, and an additional child pointer. This child pointer may or may not point to a separate doubly linked list, also containing these special nodes. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure as shown in the example below.

Given the head of the first level of the list, flatten the list so that all the nodes appear in a single-level, doubly linked list. Let curr be a node with a child list. The nodes in the child list should appear after curr and before curr.next in the flattened list.

Return the head of the flattened list. The nodes in the list must have all of their child pointers set to null.

[Leetcode link](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/)

#### Example 1:

![Question - 1](https://assets.leetcode.com/uploads/2021/11/09/flatten11.jpg)

```
Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
Output: [1,2,3,7,8,11,12,9,10,4,5,6]
Explanation: The multilevel linked list in the input is shown.
After flattening the multilevel linked list it becomes:
```

![Answer - 1](https://assets.leetcode.com/uploads/2021/11/09/flatten12.jpg)

#### Example 2:

![Question - 2](https://assets.leetcode.com/uploads/2021/11/09/flatten2.1jpg)

```
Input: head = [1,2,null,3]
Output: [1,3,2]
Explanation: The multilevel linked list in the input is shown.
After flattening the multilevel linked list it becomes:
```

![Answer - 2](https://assets.leetcode.com/uploads/2021/11/24/list.jpg)

#### Example 3:

```
Input: head = []
Output: []
Explanation: There could be empty list in the input.
```

#### Constraints:

- The number of Nodes will not exceed 1000.
- 1 <= Node.val <= 10<sup>5</sup>

### Code

```python title="Python Code"

class Solution(object):
    def flatten(self, head):
        """
        :type head: Node
        :rtype: Node
        """

        if not head:
            return None

        tmp1 = tmp2 = None

        if head.child:
            tmp1 = self.flatten(head.child)
            head.child = None
        if head.next:
            tmp2 = self.flatten(head.next)

        if tmp1:
            head.next = tmp1
            head.next.prev = head

            cur = tmp1
            while cur.next:
                cur = cur.next

            if tmp2:
                cur.next = tmp2
                tmp2.prev = cur

        elif tmp2:
            head.next = tmp2
            head.next.prev = head

        return head

```
