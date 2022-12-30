---
sidebar_position: 129
tags: [facebook, array]
---

# Rotate Array

### Problem Statement

Given an array, rotate the array to the right by k steps, where k is non-negative.

[LeetCode link](https://leetcode.com/problems/rotate-array/)

#### Example 1

```
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
```

#### Example 2

```
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
```

### Constraints:

- 1 <= nums.length <= 10<sup>5</sup>
- -2<sup>31</sup> <= nums[i] <= 2<sup>31</sup> - 1
- 0 <= k <= 10<sup>5</sup>

### Code

```python title="Python Code"
class Solution:
    def rotate(self, nums, k):
        nums[:] = nums[-(k%len(nums)):] + nums[:-k%len(nums)]
```
