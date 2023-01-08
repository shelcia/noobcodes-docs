---
sidebar_position: 87
tags: [linkedin]
---

# Two Sum

### Problem Statement

Given an array of integers `nums` and an integer `target`, return _indices of the two numbers such that they add up to `target`_.

[LeetCode link](https://leetcode.com/problems/two-sum/)

### Code

```python title="Python Code"
class Solution:
    def twoSum(self, nums, target: int):

        num_set = {}
        for num_index, num in enumerate(nums):
            if (target-num) in num_set:
                return [num_set[target-num], num_index]
            num_set[num] = num_index
```
