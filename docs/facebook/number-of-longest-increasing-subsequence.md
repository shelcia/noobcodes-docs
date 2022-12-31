---
sidebar_position: 56
tags: [facebook]
---

# Number of Longest Increasing Subsequence

### Problem Statement

Given an integer array nums, return the number of longest increasing subsequences.

Notice that the sequence has to be strictly increasing.

[Leetcode Link](https://leetcode.com/problems/number-of-longest-increasing-subsequence)

#### Example 1:

```
Input: nums = [1,3,5,4,7]
Output: 2
Explanation: The two longest increasing subsequences are [1, 3, 4, 7] and [1, 3, 5, 7].
```

#### Example 2:

```
Input: nums = [2,2,2,2,2]
Output: 5
Explanation: The length of the longest increasing subsequence is 1, and there are 5 increasing subsequences of length 1, so output 5.
```

#### Constraints:

- 1 <= nums.length <= 2000
- -10<sup>6</sup> <= nums[i] <= 10<sup>6</sup>

### Code

```python title="Python Code"
class Solution:
    def findNumberOfLIS(nums):
        # dp solution, 2 arrays
        # length[i] stores the longest length ending at nums[i]
        # count[i] counts the number of paths with length length[i]

        if not nums:
            return 0

        n = len(nums)
        length = [1] * n
        count  = [1] * n

        for i in range(1, n):
            for j in range(i):
                if nums[i] > nums[j]:
                    # length[i] = max(length[j]+1, length[i])
                    # but we need to compute count also
                    if length[i] == length[j]:
                        length[i] = length[j]+1
                        count[i]  = count[j]
                    elif length[i] == length[j]+1:
                        count[i] += count[j]

        maxLength = max(length)
        return sum([count[i] for i in range(n) if length[i] == maxLength])
```
