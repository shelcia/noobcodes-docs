---
sidebar_position: 92
tags: [linkedin]
---

# Validate Binary Search Tree

### Problem Statement

Given the `root` of a binary tree, determine if it is a **valid binary search tree (BST)**.

A **valid BST** is defined as follows:

- The `left subtree` of a node contains only nodes with keys less than the node's key.
- The `right subtree` of a node contains only nodes with keys greater than the node's key.
- Both the `left and right subtrees` must also be binary search trees.

[Leetcode Link](https://leetcode.com/problems/validate-binary-search-tree/)

#### Example 1:

![alt text](https://assets.leetcode.com/uploads/2020/12/01/tree1.jpg)

```
Input: root = [2,1,3]
Output: true
```

#### Example 2:

![alt text](https://assets.leetcode.com/uploads/2020/12/01/tree2.jpg)

```
Input: root = [5,1,4,null,null,3,6]
Output: false

Explanation: The root node's value is 5 but its right child's value is 4.
```

### Code

```python title="Python"
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:

        def helper(node, low, high):
            if not node:
                return True
            if not (low < node.val < high):
                return False
            return helper(node.left, low, node.val) and helper(node.right, node.val, high)

        return helper(root, -inf, inf)
```
