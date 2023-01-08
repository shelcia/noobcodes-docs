---
sidebar_position: 6
tags: [facebook]
---

# Binary Tree Inorder Traversal

### Problem Statement

Given the root of a binary tree, return the inorder traversal of its nodes' values.

[LeetCode link](https://leetcode.com/problems/binary-tree-inorder-traversal/)

#### Example 1:

```
Input: root = [1,null,2,3]
Output: [1,3,2]
```

#### Example 2:

```
Input: root = []
Output: []
```

#### Example 3:

```
Input: root = [1]
Output: [1]
```

#### Constraints:

- The number of nodes in the tree is in the range `[0, 100]`.
- `-100 <= Node.val <= 100`

### Code

```python title="Python Code"
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def inorderTraversal(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        return [] if root is None else self.inorderTraversal(root.left) + [root.val] + self.inorderTraversal(root.right)
```
