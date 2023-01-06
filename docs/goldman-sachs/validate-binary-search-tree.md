---
sidebar_position: 830
tags: [Goldman Sachs]
---

# Validate Binary Search Tree

### Problem Statement

Given the root of a binary tree, determine if it is a valid binary search tree `(BST)`.

A valid `BST` is defined as follows:

- The `left` subtree of a node contains only nodes with keys less than the node's key.
- The `right` subtree of a node contains only nodes with keys greater than the node's key.
- Both the left and right subtrees must also be binary search trees.

[Leetcode Link](https://leetcode.com/problems/validate-binary-search-tree/)

#### Example 1:

![Alt text](https://assets.leetcode.com/uploads/2020/12/01/tree1.jpg)

```

Input: root = [2,1,3]
Output: true
```

#### Example 2:

![Alt text](https://assets.leetcode.com/uploads/2020/12/01/tree2.jpg)

```
Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
```

#### Constraints:

- The number of nodes in the tree is in the range `[1, 104]`.
- `-231 <= Node.val <= 231 - 1`

### Code

```java title="java Code"


public class Solution {
    public boolean isValidBST(TreeNode root) {
        return isValidBST(root, Long.MIN_VALUE, Long.MAX_VALUE);
    }

    public boolean isValidBST(TreeNode root, long minVal, long maxVal) {
        if (root == null) return true;
        if (root.val >= maxVal || root.val <= minVal) return false;
        return isValidBST(root.left, minVal, root.val) && isValidBST(root.right, root.val, maxVal);
    }
}
```
