---
sidebar_position: 3
tags: [blind-75]
---

# House Robber II

### Problem Statement

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array `nums` representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

#### Example 1:

```
Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
```
#### Example 2:

```
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
```
#### Example 3:

```
Input: nums = [1,2,3]
Output: 3
```

#### Constraints:

* `1 <= nums.length <= 100`
* `0 <= nums[i] <= 1000`

### Code

```jsx title="Python Code"
class Solution:
    def rob(self, nums: List[int]) -> int:
        if not nums: return 0
        def max_money(nums):
            nums = [0]+nums
            for i in range(3,len(nums)):
                nums[i]+=max(nums[i-3],nums[i-2])
            return max(nums[-1],nums[-2])
        return max(max_money(nums[1:]),max_money(nums[:-1])) if len(nums) > 2 else max(nums)
```