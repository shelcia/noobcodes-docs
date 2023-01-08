---
sidebar_position: 3
tags: [LinkedIn]
---

# Binary Tree Level Order Traversal

### Problem Statement

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

[LeetCode link](https://leetcode.com/problems/binary-tree-level-order-traversal/)

### Example 1:

```
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
```

### Example 2:

```
Input: root = [1]
Output: [[1]]
```

### Example 3:

```
Input: root = []
Output: []
```

### Constraints:

- The number of nodes in the tree is in the range [0, 2000].
- -1000 <= Node.val <= 1000

### Code

```python title="Python Code"
class Solution(object):
    def levelOrder(self, root):
        """
        :type root: TreeNode
        :rtype: List[List[int]]
        """

        if root:
            stack = [[root]]
            l = [[root.val]]
        else:
            return []

        while stack:
            ll = []
            sl = []
            nl = stack.pop()
            for n in nl:
                if n.left:
                    ll.append(n.left.val)
                    sl.append(n.left)
                if n.right:
                    ll.append(n.right.val)
                    sl.append(n.right)
            if sl:
                stack.append(sl)
            if ll:
                l.append(ll)
        return l
```
