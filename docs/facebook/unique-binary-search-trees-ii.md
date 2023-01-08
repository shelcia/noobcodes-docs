---
sidebar_position: 214
tags: [facebook]
---

# Unique Binary Search Trees II

### Problem Statement

Given an integer `n`, return _all the structurally unique **BST's** (binary search trees), which has exactly n nodes of unique values from_ `1` to `n`. Return the answer in **any order**.

[Leetcode Link](https://leetcode.com/problems/unique-binary-search-trees-ii)

#### Example 1:

![ex1](https://assets.leetcode.com/uploads/2021/01/18/uniquebstn3.jpg)

```
Input: n = 3
Output: [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
```

#### Example 2:

```
Input: n = 1
Output: [[1]]
```

#### Constraints:

- `1 <= n <= 8`

### Code

```python title="Python Code"
class Solution:
    def generateTrees(self, n: int) -> List[Optional[TreeNode]]:
        @lru_cache(None)
        def dfs(left, right):
            if left > right: return [None]
            if left == right: return [TreeNode(left)]
            ans = []
            for root in range(left, right+1):
                leftNodes = dfs(left, root - 1)
                rightNodes = dfs(root+1, right)
                for leftNode in leftNodes:
                    for rightNode in rightNodes:
                        rootNode = TreeNode(root, leftNode, rightNode)
                        ans.append(rootNode)
            return ans

        return dfs(1, n)
```
