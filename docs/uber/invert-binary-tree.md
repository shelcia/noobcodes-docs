---
sidebar_position: 15
tags: [uber]
---

# Invert Binary Tree

### Problem Statement

Given the root of a binary tree, invert the tree, and return its root.

[Leetcode Link](https://leetcode.com/problems/invert-binary-tree/)

#### Example 1:

```
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
```

#### Example 2:

```
Input: root = [2,1,3]
Output: [2,3,1]
```

#### Example 3:

```
Input: root = []
Output: []
```

#### Constraints:

- The number of nodes in the tree is in the range `[0, 100]`.
- `-100 <= Node.val <= 100`

### Code

```python title="Python Code"

class Solution(object):
    def invertTree(self, root):
        """
        :type root: TreeNode
        :rtype: TreeNode
        """
        if not root:
        return None
        root.left,root.right=root.right,root.left
        self.invertTree(root.left)
        self.invertTree(root.right)
        return root
```
