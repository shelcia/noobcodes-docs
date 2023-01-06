---
sidebar_position: 46
tags: [LinkedIn]
---

# Merge k Sorted Lists

### Problem Statement

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

[Leetcode Link](https://leetcode.com/problems/merge-k-sorted-lists/)

#### Example 1:

```
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
```

#### Example 2:

```
Input: lists = []
Output: []
```
#### Example 3:
```
Input: lists = [[]]
Output: []
```

### Code

```jsx title="Python"
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        head = tmp = ListNode()
        arr = []

        for l in lists:
            while l != None:
                arr.append(l.val)
                l = l.next

        for val in sorted(arr):
            tmp.next = ListNode()
            tmp = tmp.next
            tmp.val = val

        return head.next
```