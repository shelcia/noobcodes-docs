---
sidebar_position: 64
tags: [facebook]
---

# Palindrome Linked List

### Problem Statement

Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

[Leetcode Link](https://leetcode.com/problems/palindrome-linked-list)

#### Example 1:

```
Input: head = [1,2,2,1]
Output: true
```

#### Example 2:

```
Input: head = [1,2]
Output: false
```

#### Constraints:

- The number of nodes in the list is in the range [1, 10<sup>5</sup>].
- 0 <= Node.val <= 9

### Code

```python title="Python Code"
class Solution(object):
    def isPalindrome(self, head):
        """
        :type head: ListNode
        :rtype: bool
        """
        def getMiddleNode(head):
            slowPtr = fastPtr = head
            while fastPtr and fastPtr.next:
                fastPtr = fastPtr.next.next
                slowPtr = slowPtr.next
            else:
                return slowPtr

        def reverseList(head):
            previousnode, currentnode = None, head
            while currentnode:
                nextnode = currentnode.next
                currentnode.next = previousnode
                previousnode = currentnode
                currentnode = nextnode
            else:
                return previousnode

        if not head:
            return True
        else:
            middlenode = getMiddleNode(head)
            revhead = reverseList(middlenode)
            while revhead:
                if revhead.val == head.val:
                    revhead = revhead.next
                    head = head.next
                else:
                    return False
            else:
                return True
```
