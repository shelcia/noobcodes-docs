---
sidebar_position: 211
tags: [facebook]
---

# Two Sum IV - Input is a BST

### Problem Statement

Given the `root` of a binary search tree and an integer `k`, return `true` _if there exist two elements in the BST such that their sum is equal to `k`, or `false` otherwise_.

[Leetcode Link](https://leetcode.com/problems/two-sum-iv-input-is-a-bst)

#### Example 1:

![ex1](https://assets.leetcode.com/uploads/2020/09/21/sum_tree_1.jpg)

```
Input: root = [5,3,6,2,4,null,7], k = 9
Output: true
```

#### Example 2:

![ex1](https://assets.leetcode.com/uploads/2020/09/21/sum_tree_2.jpg)

```
Input: root = [5,3,6,2,4,null,7], k = 28
Output: false
```

### Constraints:

- The number of `nodes` in the tree is in the range `[1, 10`<sup>4</sup>`]`.
- `-10`<sup>4</sup> `<=` `Node.val` `<=` `10`<sup>4</sup>
- `root` is guaranteed to be a **valid binary search tree**.
- `-105` `<=` `k` `<=` 10<sup>5</sup>

### Code

```python title="Python Code"

class Solution:
    def findTarget(self, root: Optional[TreeNode], k: int) -> bool:
        def dfs(root, seen):
            if root == None: return False
            complement = k - root.val
            if complement in seen: return True
            seen.add(root.val)
            return dfs(root.left, seen) or dfs(root.right, seen)

        return dfs(root, set())
```
