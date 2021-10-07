---
sidebar_position: 9
---

# Two sum

### Problem Statement

Given an array of integers nums and an integer target, return indices of the two numbers
such that they add up to target.

### Code

```jsx title="python code"
class Solution:
    def twoSum(self, nums, target: int):

        num_set = {}
        for num_index, num in enumerate(nums):
            if (target-num) in num_set:
                return [num_set[target-num], num_index]
            num_set[num] = num_index
```
