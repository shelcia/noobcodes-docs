---
sidebar_position: 136
tags: [amazon]
---

# Flatten Binary Tree to Linked List

### Problem Statement

You are given a doubly linked list, which contains nodes that have a next pointer, a previous pointer, and an additional child pointer. This child pointer may or may not point to a separate doubly linked list, also containing these special nodes. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure as shown in the example below.

Given the head of the first level of the list, flatten the list so that all the nodes appear in a single-level, doubly linked list. Let curr be a node with a child list. The nodes in the child list should appear after curr and before curr.next in the flattened list.

Return the head of the flattened list. The nodes in the list must have all of their child pointers set to null.

[Leetcode link](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/)

#### Example 1:

![Question - 1](https://assets.leetcode.com/uploads/2021/01/14/flaten.jpg)

```
Input: root = [1,2,5,3,4,null,6]
Output: [1,null,2,null,3,null,4,null,5,null,6]
```

#### Example 2:

```
Input: root = []
Output: []
```

#### Example 3:

```
Input: root = [0]
Output: [0]
```

#### Constraints:

- The number of nodes in the tree is in the range [0, 2000].
- -100 <= Node.val <= 100

### Code

```python title="Python Code"

class Solution(object):
    def flatten_recur(self, root, prev):
    if root is None:
        return None

    prev_r = self.flatten_recur(root.right, prev)
    if prev_r:
        prev_l = self.flatten_recur(root.left, prev_r)
    else:
        prev_l = self.flatten_recur(root.left, prev)


    if prev_l:
        root.right = prev_l
    elif prev_r:
        root.right = prev_r
    else:
        root.right = prev

    root.left = None

    return root

```
