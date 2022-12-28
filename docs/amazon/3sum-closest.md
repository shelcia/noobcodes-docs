---
sidebar_position: 123
tags: [amazon]
---

# 3sum Closest

### Problem Statement

Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

[Leetcode link](https://leetcode.com/problems/3sum-closest)

#### Example 1:

```
Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
```

#### Example 2:

```
Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
```

#### Constraints:

- 3 <= nums.length <= 500
- -1000 <= nums[i] <= 1000
- -10<sup>4</sup> <= target <= 10<sup>4</sup>

### Code

```python title="Python Code"

class Solution:
    def threeSumClosest(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        if not nums or len(nums) < 3 :
            return []
        nums.sort()
        closest = nums[0]+ nums[1] + nums[2]
        max_error = abs(nums[0]+ nums[1] + nums[2] - target)
        for i in range(len(nums)-2):
            if i >=1 and nums[i] == nums[i-1]:
                continue
            base = nums[i]
            lp = i+1
            rp = len(nums)-1
            s = base + nums[lp] + nums[rp]

            while lp < rp :
                s = base + nums[lp] + nums[rp]
                if abs(s - target) < max_error:
                    max_error = abs(s - target)
                    closest = s

                if s < target : # s < target means lp go right
                    lp += 1
                elif s > target :
                    rp -= 1
                else:
                    return target

        return closest

```
