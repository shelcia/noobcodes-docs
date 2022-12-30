---
sidebar_position: 76
tags: [facebook]
---

# Path Sum III

### Problem Statement

Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.

The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).

[Leetcode link](https://leetcode.com/problems/path-sum-iii/)

#### Example 1:

```
Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
Output: 3
Explanation: The paths that sum to 8 are shown.
```

#### Example 2:

```
Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: 3
```

#### Constraints:

- The number of nodes in the tree is in the range [0, 1000].
- -10<sup>9</sup> <= Node.val <= 10<sup>9</sup>
- -1000 <= targetSum <= 1000

### Code

```python title="Python Code"
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):

    def pathSum(self, root, target):
        """
        :type root: TreeNode
        :type sum: int
        :rtype: int
        """
        if not root:
            return 0
        self.res = 0

        def add(node, val):
            if not node:
                return
            node.val += val
            add(node.left, node.val)
            add(node.right, node.val)

        def backtrack(node):
            self.res += path[node.val - target]
            path[node.val] += 1
            if node.left:
                backtrack(node.left)
            if node.right:
                backtrack(node.right)
            path[node.val] -= 1

        add(root, 0)
        path = collections.defaultdict(int)
        path[0] += 1
        backtrack(root)

        return self.res


```
