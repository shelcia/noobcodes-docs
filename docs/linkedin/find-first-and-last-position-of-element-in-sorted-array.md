---
sidebar_position: 20
tags: [LinkedIn]
---

# Find First and Last Position of Element in Sorted Array

### Problem Statement

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

[Leetcode Link](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

#### Example 1:

```
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
```

#### Example 2:

```
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
```

#### Example 3:

```
Input: nums = [], target = 0
Output: [-1,-1]
```

#### Constraints:

- 0 <= nums.length <= 105
- -109 <= nums[i] <= 109
- nums is a non-decreasing array.
- -109 <= target <= 109

### Code

```jsx title="Python"
class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]: # nums = [5,7,7,8,8,8,8,10], target = 8
        unique = sorted(tuple(set(nums))) # [5, 7, 8, 10]
        if target not in unique:
            return [-1,-1]
        first = nums.index(target) # 3
        target_index = unique.index(target) # 2 
        if target_index == len(unique)-1:
            return [first,len(nums)-1]
        last = nums.index(unique[target_index+1]) # 7
        return [first,last-1] # [3,6]
```
