---
sidebar_position: 38
tags: [adobe]
---

# Longest Increasing Subsequence

### Problem Statement

Given an integer array `nums`, return the length of the longest strictly increasing subsequence
.

[Leetcode Link](https://leetcode.com/problems/longest-increasing-subsequence/)

#### Example 1:

```
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
```

#### Example 2:

```
Input: nums = [0,1,0,3,2,3]
Output: 4
```

#### Example 3:

```
Input: nums = [7,7,7,7,7,7,7]
Output: 1
```

#### Constraints:

- `1 <= nums.length <= 2500`
- -10<sup>4</sup> <= nums[i] <= 10<sup>4</sup>
 

### Code

```python title="Python Code"
class Solution:
    def lengthOfLIS(self, nums):
        tails = [0] * len(nums)
        size = 0
        for x in nums:
            i, j = 0, size
            while i != j:
                m = (i + j) / 2
                if tails[m] < x:
                    i = m + 1
                else:
                    j = m
            tails[i] = x
            size = max(i + 1, size)
        return size
                
```
