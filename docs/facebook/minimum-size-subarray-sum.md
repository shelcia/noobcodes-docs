---
sidebar_position: 32
tags: [facebook]
---

# Minimum Size Subarray Sum

### Problem Statement

Given an array of positive integers nums and a positive integer target, return the minimal length of a
subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

[Leetcode link](https://leetcode.com/problems/minimum-size-subarray-sum)

#### Example 1:

```
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
```

#### Example 2:

```
Input: target = 4, nums = [1,4,4]
Output: 1
```

#### Example 3:

```
Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
```

#### Constraints:

- 1 <= target <= 10<sup>9</sup>
- 1 <= nums.length <= 10<sup>5</sup>
- 1 <= nums[i] <= 10<sup>4</sup>

### Code

```python title="Python Code"
class Solution:
        def minSubArrayLen(self, s, nums):
        """
        :type s: int
        :type nums: List[int]
        :rtype: int
        """
        length = len(nums)
        lo = 0
        minLength = length + 1
        hi = 0
        if hi >= length:
            return 0
        curSum = nums[hi]
        while(1):
            if hi >= length - 1 and curSum < s:
                break
            if curSum < s:
                hi += 1
                curSum += nums[hi]
                continue
            if curSum >= s:
                if hi - lo + 1 <= minLength:
                    minLength = hi - lo + 1
                curSum -= nums[lo]
                lo += 1

        if minLength > length:
            return 0
        else:
            return minLength

```
