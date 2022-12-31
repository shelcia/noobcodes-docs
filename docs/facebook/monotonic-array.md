---
sidebar_position: 38
tags: [facebook]
---

# Monotonic Array

### Problem Statement

An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.

[Leetcode Link](https://leetcode.com/problems/monotonic-array)

#### Example 1:

```
Input: nums = [1,2,2,3]
Output: true
```

#### Example 2:

```
Input: s = "a", t = "a"
Output: "a"
```

#### Example 3:

```
Input: nums = [1,3,2]
Output: false
```

#### Constraints:

- 1 <= nums.length <= 10<sup>5</sup>
- -10<sup>5</sup> <= nums[i] <= 10<sup>5</sup>

### Code

```python title="Python Code"
class Solution:
    def isMonotonic(self, A):
        return all(A[i] <= A[i - 1] for i in range(1, len(A))) or all(A[i] >= A[i - 1] for i in range(1, len(A)))
```
