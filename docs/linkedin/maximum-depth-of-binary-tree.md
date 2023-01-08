---
sidebar_position: 49
tags: [linkedin]
---

# Maximum Depth of Binary Tree

### Problem Statement

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

[Leetcode Link](https://leetcode.com/problems/maximum-depth-of-binary-tree/)

#### Example 1:

![alt text](https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg)

```
Input: root = [3,9,20,null,null,15,7]
Output: 3
```

#### Example 2:

```
Input: root = [1,null,2]
Output: 2
```

#### Constraints:

- The number of nodes in the tree is in the range [0, 10<sup>4</sup>].
- -100 <= Node.val <= 100

### Code

```python title="Python"
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        def dfs(root, depth):
            if not root: return depth
            return max(dfs(root.left, depth + 1), dfs(root.right, depth + 1))

        return dfs(root, 0)
```
