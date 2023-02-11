---
sidebar_position: 11
tags: [Blind 75, Divide and Conquer, Dynamic Programming]
---

# Maximum Subarray

### Problem Statement

Given an integer array `nums`, find the **subarray** which has the largest sum and return _its sum._

:::info
A **subarray** is a contiguous non-empty sequence of elements within an array.
:::

[Leetcode Link](https://leetcode.com/problems/maximum-subarray/)

#### Example 1:

```
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```

#### Example 2:

```
Input: nums = [1]
Output: 1
```

#### Example 3:

```
Input: nums = [5,4,-1,7,8]
Output: 23
```

### Constraints

- `1 <= nums.length <= 10`<sup>5</sup>
- `-10`<sup>4</sup>` <= nums[i] <= 10`<sup>4</sup>

### Code

```python title="Python3 Code"

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        m=0
        a=nums[0]
        for i in nums:
            m=m+i
            if m>a:
                a=m
            if m<0:
                m=0
        return a

```
