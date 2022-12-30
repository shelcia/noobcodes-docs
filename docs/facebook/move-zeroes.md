---
sidebar_position: 39
tags: [facebook]
---

# Move Zeroes

### Problem Statement

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

[Leetcode Link](https://leetcode.com/problems/move-zeroes)

#### Example 1:

```
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
```

#### Example 2:

```
Input: nums = [0]
Output: [0]
```

#### Constraints:

- 1 <= nums.length <= 10<sup>4</sup>
- -2<sup>31</sup> <= nums[i] <= 2<sup>31</sup> - 1

### Code

```python title="Python Code"
class Solution:
    # in-place
    def moveZeroes(self, nums):
        zero = 0  # records the position of "0"
        for i in xrange(len(nums)):
            if nums[i] != 0:
                nums[i], nums[zero] = nums[zero], nums[i]
                zero += 1
```
