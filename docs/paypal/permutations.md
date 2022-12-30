---
sidebar_position: 27
tags: [paypal]
---

# Permutations

### Problem Statement

Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in **any order**.

[Leetcode Link](https://leetcode.com/problems/permutations/)

#### Example 1:

```
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

#### Example 2:

```
Input: nums = [0,1]
Output: [[0,1],[1,0]]
```

#### Example 3:

```
Input: nums = [1]
Output: [[1]]
```

#### Constraints:

- 1 <= nums.length <= 6
- -10 <= nums[i] <= 10
- All the integers of nums are **unique**.

### Code

```jsx title="Python"
class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:

        def backtrack(d,visited,ans,nums):
            if len(d)==len(nums):
                ans.append(d.copy())
                return
            
            for i in range(len(nums)):
                if not visited[i]:
                    d.append(nums[i])
                    visited[i] = True
                    backtrack(d,visited,ans,nums)
                    d.pop()
                    visited[i] = False

        visited = [0]*len(nums)
        d,ans = [],[]
        backtrack(d,visited,ans,nums)
        return ans

```
