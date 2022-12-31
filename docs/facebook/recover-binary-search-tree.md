---
sidebar_position: 102
tags: [facebook]
---

# Recover Binary Search Tree

### Problem Statement

You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.

[Leetcode Link](https://leetcode.com/problems/recover-binary-search-tree)

#### Example 1:

```
Input: root = [1,3,null,null,2]
Output: [3,1,null,null,2]
Explanation: 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid.
```

#### Example 2:

```
Input: root = [3,1,4,null,null,2]
Output: [2,1,4,null,null,3]
Explanation: 2 cannot be in the right subtree of 3 because 2 < 3. Swapping 2 and 3 makes the BST valid.
```

#### Constraints:

- The number of nodes in the tree is in the range [2, 1000].
- -2<sup>31</sup> <= Node.val <= 231 - 1

### Code

```python title="Python Code"
class NumMatrix:
    class Solution(object):
    def recoverTree(self, root):
        """
        :type root: TreeNode
        :rtype: void Do not return anything, modify root in-place instead.
        """
        self.order = []
        self.prev = None
        self.inorder(root)
        if len(self.order) == 2:
            self.swap(self.order[0][0], self.order[1][1])
        elif len(self.order) == 1:
            self.swap(self.order[0][0], self.order[0][1])
        return

    def inorder(self, root):
        if root == None:
            return
        self.inorder(root.left)
        if self.prev and self.prev.val > root.val:
            self.order.append((self.prev, root))
        self.prev = root
        self.inorder(root.right)
        return

    def swap(self, r1, r2):
        r1.val, r2.val = r2.val, r1.val
        return
```
