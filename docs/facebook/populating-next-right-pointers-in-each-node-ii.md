---
sidebar_position: 87
tags: [facebook]
---

# Populating Next Right Pointers in Each Node II

### Problem Statement

Given a binary tree

```
struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
```

Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

[Leetcode Link](https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii)

#### Example 1:

```
Input: root = [1,2,3,4,5,null,7]
Output: [1,#,2,3,#,4,5,7,#]
Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
```

#### Example 2:

```
Input: root = []
Output: []
```

#### Constraints:

- The number of nodes in the tree is in the range [0, 6000].
- -100 <= Node.val <= 100

### Code

```python title="Python Code"
# Definition for binary tree with next pointer.
# class TreeLinkNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
#         self.next = None

class Solution:
    # @param root, a tree link node
    # @return nothing
    def connect(self, root):

        if root is None:
            return

        cur = root

        while cur:
            l = 0
            tail = None
            head = None
            node = cur
            while node is not None:
                if node.left is not None:
                    if tail is None:
                        tail = node.left
                        head = tail
                    else:
                        tail.next = node.left
                        tail = node.left
                    l+=1
                if node.right is not None:
                    if tail is None:
                        tail = node.right
                        head = tail
                    else:
                        tail.next = node.right
                        tail = node.right
                    l+=1
                node = node.next
            cur = head

```
