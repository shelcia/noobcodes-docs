---
sidebar_position: 30
tags: [paypal]
---

# Move Zeroes

### Problem Statement

Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

**Note** that you must do this in-place without making a copy of the array.

[Leetcode Link](https://leetcode.com/problems/move-zeroes/)

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

- `1 <= nums.length <= 10`<sup>4</sup>
- `-2`<sup>31</sup> <`= nums[i] <= 2`<sup>31</sup> `- 1`

### Code

```python title="Python"
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        i = 0
        while True:
            if 0 in nums:
                i += 1
                nums.remove(0)
                continue
            break
        for j in range(i):
            nums.append(0)

```
