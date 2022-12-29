---
sidebar_position: 61
tags: [facebook]
---

# Odd Even Linked List

### Problem Statement

Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.

[Leetcode Link](https://leetcode.com/problems/odd-even-linked-list)

#### Example 1:

```
Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]
```

#### Example 2:

```
Input: head = [2,1,3,5,6,4,7]
Output: [2,3,6,7,1,5,4]
```

#### Example 3:

```
Input: steps = 4, arrLen = 2
Output: 8
```

#### Constraints:

- The number of nodes in the linked list is in the range [0, 10<sup>4</sup>].
- -10<sup>6</sup> <= Node.val <= 10<sup>6</sup>

### Code

```python title="Python Code"
class Solution(object):
    def oddEvenList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        if head is None:
            return head
        currentOdd = head
        count = 2
        node = head
        pre = node
        node = node.next
        while node is not None:
            if count % 2 == 0:
                pre = node
                node = node.next
            else:
                next = node.next
                pre.next = next
                temp = currentOdd.next
                currentOdd.next = node
                node.next = temp
                currentOdd = node
                node = next
            count += 1
        return head
```
