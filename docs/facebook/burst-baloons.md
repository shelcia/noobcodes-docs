---
sidebar_position: 12
tags: [facebook]
---

# Burst Balloons

### Problem Statement

You are given `n` balloons, indexed from `0` to `n - 1`. Each balloon is painted with a number on it represented by an array nums. You are asked to burst all the balloons.

If you burst the ith balloon, you will get `nums[i - 1] * nums[i] * nums[i + 1]` coins. If `i - 1` or `i + 1` goes out of bounds of the array, then treat it as if there is a balloon with a 1 painted on it.

Return the maximum coins you can collect by bursting the balloons wisely.

[Leetcode Link](https://leetcode.com/problems/burst-balloons/)

#### Example 1:

```
Input: nums = [3,1,5,8]
Output: 167
Explanation:
nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
coins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167
```

#### Example 2:

```
Input: nums = [1,5]
Output: 10
```

#### Constraints:

- `n == nums.length`
- `1 <= n <= 300`
- `0 <= nums[i] <= 100`

### Code

```python title="Python Code"

class Solution(object):
    def maxCoins(self, nums):
        nums = [1] + nums + [1]  # add the dummy head and tail, both are left till end and DO NOT burst them.
        dp = [[0] * len(nums) for _ in nums]
        def search(i, j):
            if j - i < 2: return 0
            if dp[i][j] > 0: return dp[i][j]
            for k in range(i + 1, j):
                dp[i][j] = max(dp[i][j], search(i, k) + search(k, j) + nums[i] * nums[k] * nums[j])
            return dp[i][j]
        return search(0, len(nums) - 1)

```
