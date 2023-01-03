---
sidebar_position: 176
tags: [facebook]
---

# Subsets II

### Problem Statement

Given an integer array nums of unique elements, return all possible
subsets
(the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

[Leetcode link](https://leetcode.com/problems/subsets-ii)

### Examples

```
Example 1:

Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]


Example 2:

Input: nums = [0]
Output: [[],[0]]
```

### Constraints

- 1 <= nums.length <= 10
- -10 <= nums[i] <= 10

### Code

```python title="Python3 Code"
class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        def backtrack(i, curSubset):
            if i == len(nums):
                ans.append(curSubset[::])
                return

            curSubset.append(nums[i])
            backtrack(i + 1, curSubset)  # Pick
            curSubset.pop()

            if not curSubset or curSubset[-1] != nums[i]:
                backtrack(i + 1, curSubset)  # Don't pick

        nums.sort()
        ans = []
        backtrack(0, [])
        return ans
```
