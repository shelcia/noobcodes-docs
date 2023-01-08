---
sidebar_position: 150
tags: [facebook]
---

# Single Element in a Sorted Array

### Problem Statement

You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

Return _the single element that appears only once._

Your solution must run in `O(log n)` time and `O(1)` space.

[Leetcode Link](https://leetcode.com/problems/single-element-in-a-sorted-array)

#### Example 1:

```
Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2
```

#### Example 2:

```
Input: nums = [3,3,7,7,10,11,11]
Output: 10
```

#### Constraints:

- `1` `<=` `nums.length` `<=` `10`<sup>5</sup>
- `0` `<=` `nums[i]` `<=` `10`<sup>5</sup>

### Code

```python title="Python"
class Solution:
    def singleNonDuplicate(self, nums: List[int]) -> int:
        l=0
        h=len(nums)-1
        while l<h:
            m=2*((l+h)//4)
            if nums[m]==nums[m+1]:
                l=m+2
            else:
                h=m
        return nums[l]
```
