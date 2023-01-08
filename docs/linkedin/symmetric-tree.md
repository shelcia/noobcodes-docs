---
sidebar_position: 83
tags: [linkedin]
---

# Symmetric Tree

### Problem Statement

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

[Leetcode Link](https://leetcode.com/problems/symmetric-tree/)

#### Example 1:

![alt text](https://assets.leetcode.com/uploads/2021/02/19/symtree1.jpg)

```
Input: root = [1,2,2,3,4,4,3]
Output: true
```

#### Example 2:

![alt text](https://assets.leetcode.com/uploads/2021/02/19/symtree2.jpg)

```
Input: root = [1,2,2,null,3,null,3]
Output: false
```

#### Constraints:

- The number of nodes in the tree is in the range [1, 1000].
- -100 <= Node.val <= 100

### Code

```python title="Python"
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        left_stack = [root.left]
        right_stack = [root.right]

        right_visited = []
        left_visited = []

        while len(left_stack) != 0:
            curr = left_stack.pop()
            if curr:
                left_visited.append(curr.val)
                left_stack.append(curr.right)
                left_stack.append(curr.left)
            else:
                left_visited.append(None)

        while len(right_stack) != 0:
            curr = right_stack.pop()
            if curr:
                right_visited.append(curr.val)
                right_stack.append(curr.left)
                right_stack.append(curr.right)
            else:
                right_visited.append(None)

        return left_visited == right_visited
```
