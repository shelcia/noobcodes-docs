---
sidebar_position: 180
tags: [facebook]
---

# Sum of Left Leaves

### Problem Statement

Given the root of a binary tree, return the sum of all left leaves.

A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.

[Leetcode Link](https://leetcode.com/problems/sum-of-left-leaves)

#### Example 1:

```
Input: root = [3,9,20,null,null,15,7]
Output: 24
Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.
```

#### Example 2:

```
Input: root = [1]
Output: 0
```

#### Constraints:

- The number of nodes in the tree is in the range `[1, 1000]`.
- `-1000 <= Node.val <= 1000`

### Code

```python title="Python Code"

class Solution:
    def sumOfLeftLeaves(self, root: Optional[TreeNode]) -> int:
        ans = 0
        while root:
            if root.left:
                pre, isLeft = root.left, True
                while pre.right and pre.right != root:
                    pre = pre.right
                if not pre.right:
                    pre.right = root
                    root = root.left
                else:
                    pre.right = None
                    if pre == root.left and not pre.left:
                        ans = ans + pre.val
                    root = root.right
            else:
                root = root.right
        return ans
```
