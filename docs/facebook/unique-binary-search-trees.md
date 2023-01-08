---
sidebar_position: 213
tags: [facebook]
---

# Unique Binary Search Trees

### Problem Statement

Given an integer `n`, return the _number of structurally unique **BST's** (binary search trees) which has exactly **n nodes** of unique values from_ `1` to `n`.

[Leetcode Link](https://leetcode.com/problems/unique-binary-search-trees)

#### Example 1:

```
Input: n = 3
Output: 5
```

#### Example 2:

```
Input: n = 1
Output: 1
```

#### Constraints:

- `1 <= n <= 19`

### Code

```python title="Python Code"
class Solution:
    def numTrees(self, n: int) -> int:
        if n <= 1: return 1
        return sum(self.numTrees(i-1) * self.numTrees(n-i) for i in range(1, n+1))
```
