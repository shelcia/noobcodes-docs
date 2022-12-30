---
sidebar_position: 19
tags: [paypal]
---

# Remove Linked List Elements

### Problem Statement

Given the `head` of a linked list and an integer `val`, remove all the nodes of the linked list that has `Node.val == val`, and *return the new head*.

#### Example 1:

![alt text](https://assets.leetcode.com/uploads/2021/03/06/removelinked-list.jpg)

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

[Leetcode Link](https://leetcode.com/problems/remove-linked-list-elements/)

### Code

```jsx title="Python"
class Solution:
    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        temp = head
        prev = None             # initially prev should points to None
        while temp!=None:
            if temp.val == val and prev == None :      # when first node is val which has to remove
                temp = temp.next
                head = temp
                prev = None                         # prev must None because still first Node equal to val
            elif temp.val == val:               # when in middle node equal to val
                prev.next = temp.next               # simple prev point to next node
                temp = temp.next
            else:                               # Move untill node not equal to val
                prev = temp
                temp = temp.next
        return head

```

