---
sidebar_position: 63
tags: [LinkedIn]
---

# Product of Array Except Self

### Problem Statement

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

[Leetcode Link](https://leetcode.com/problems/product-of-array-except-self)

#### Example 1:

```
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
```

#### Example 2:

```
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
```

#### Constraints:

- 2 <= nums.length <= 10<sup>5</sup>
- -30 <= nums[i] <= 30
- The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

### Code

```python title="Python Code"
class Solution(object):
    def productExceptSelf(self, nums):
        p,prod=[1]*len(nums),1
        for i in xrange(1,len(nums)):
            p[i]=p[i-1]*nums[i-1]

        for i in reversed(xrange(len(nums)-1)):
            prod=nums[i+1]*prod
            p[i]=p[i]*prod
        return p
```
