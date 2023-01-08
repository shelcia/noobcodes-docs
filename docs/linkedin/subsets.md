---
sidebar_position: 82
tags: [linkedin]
---

# Subsets

### Problem Statement

Given an integer array `nums` of unique elements, return _all possible subsets (the power set)_.

The solution `set` must not contain duplicate subsets. Return _the solution in any order_.

[Leetcode link](https://leetcode.com/problems/subsets)

#### Example 1:

```
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
```

#### Example 2:

```
Input: nums = [0]
Output: [[],[0]]
```

### Constraints

- `1 <= nums.length <= 10`
- `-10 <= nums[i] <= 10`
- All the numbers of `nums` are **unique**.

### Code

```python title="Python3 Code"
class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:

        res = []



        def dfs(i,subset):
            if i>=len(nums):
                res.append(subset)
                return

            dfs(i+1,subset+[nums[i]])

            dfs(i+1,subset)

        dfs(0,[])

        return res
```
