---
sidebar_position: 227
tags: [facebook]
---

# Validate Binary Search Tree

### Problem Statement

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

- The left subtree of a node contains only nodes with keys less than the node's key.
- The right subtree of a node contains only nodes with keys greater than the node's key.
- Both the left and right subtrees must also be binary search trees.

[Leetcode Link](https://leetcode.com/problems/valid-triangle-number)

### Examples:

```
Example 1:

Input: root = [2,1,3]
Output: true

Example 2:

Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
```

### Constraints:

- The number of nodes in the tree is in the range [1, 10<sup>4</sup>].
- -2<sup>31</sup> <= Node.val <= 2<sup>31</sup> - 1

### Code

```python title="Python Code"
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:

        def valid(node, left, right):
            if not node:
                return True
            if not (node.val<right and node.val>left):
                return False

            return (valid(node.left, left, node.val) and
                    valid(node.right, node.val, right))

        return valid(root, float(-inf), float(inf))
```
