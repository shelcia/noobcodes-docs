---
sidebar_position: 76
tags: [amazon]
---

# House Robber

### Problem Statement

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

[Leetcode link](https://leetcode.com/problems/house-robber/)

#### Example 1:

```
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
```

#### Example 2:

```
Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
```

#### Constraints:

- 1 <= nums.length <= 100
- 0 <= nums[i] <= 400

### Code

```jsx title="Python"
class Solution(object):
        def rob(self, nums):
            """
            :type nums: List[int]
            :rtype: int
            """
            count = len(nums)
            if count == 0:
                return 0
            elif count == 1:
                return nums[0]
            elif count == 2:
                return max(nums[0], nums[1])

            memo = nums[:] # copy
            memo[1] = max(nums[0], nums[1])

            for i in range(2, count):
                memo[i] = max(memo[i-1], nums[i] + memo[i-2])

            return memo[count-1]

```
