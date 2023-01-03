---
sidebar_position: 163
tags: [facebook]
---

# Sort List

### Problem Statement

Given the head of a linked list, return the list after sorting it in ascending order.

[Leetcode link](https://leetcode.com/problems/sort-list)

#### Example 1:

```
Input: head = [4,2,1,3]
Output: [1,2,3,4]
```

#### Example 2:

```
Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]
```

#### Example 3:

```
Input: head = []
Output: []
```

#### Constraints:

- The number of nodes in the list is in the range [0, 5 * 10<sup>4</sup>].
- -10<sup>5</sup> <= Node.val <= 10<sup>5</sup>

### Code

```python title="Python Code"
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def divide(self,head):
        slow,fast=head,head.next
        while fast and fast.next:
            slow=slow.next
            fast=fast.next.next
        return slow

    def Merge(self,l,r):
        temp=ans=ListNode()
        while l and r:
            if l.val<=r.val:
                temp.next=l
                l=l.next
            else:
                temp.next=r
                r=r.next
            temp=temp.next
        if l:
            temp.next=l
        if r:
            temp.next=r
        return ans.next

    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return head
        left=head
        right=self.divide(head)
        temp=right.next
        right.next=None
        right=temp
        left=self.sortList(left)
        right=self.sortList(right)
        return self.Merge(left,right)
```
