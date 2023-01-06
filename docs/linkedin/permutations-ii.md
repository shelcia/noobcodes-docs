---
sidebar_position: 59
tags: [LinkedIn]
---

# Permutations II

### Problem Statement

Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

[Leetcode Link](https://leetcode.com/problems/permutations-ii/)

#### Example 1:

```
Input: nums = [1,1,2]
Output: [[1,1,2], [1,2,1], [2,1,1]]
```

#### Example 2:

```
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

#### Constraints:

- 1 <= nums.length <= 8
- -10 <= nums[i] <= 10

### Code

```python title="Python Code"
class Solution(object):
    def __init__(self):
        self.res = []
    def dfs(self,nums,path):
        if not nums:
            self.res.append(path)
        for i in range(len(nums)):
            if i != 0 and nums[i] == nums[i-1]:
                continue
            self.dfs(nums[:i]+nums[i+1:],path+[nums[i]])

    def permuteUnique(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        nums.sort()
        self.dfs(nums,[])
        return self.res

```
