---
sidebar_position: 168
tags: [facebook]
---

# Squares of a Sorted Array

### Problem Statement

Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

[Leetcode link](https://leetcode.com/problems/squares-of-a-sorted-array)

### Examples

```
Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].


Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
```

### Constraints

- 1 <= nums.length <= 10<sup>4</sup>
- -10<sup>4</sup> <= nums[i] <= 10<sup>4</sup>
- nums is sorted in non-decreasing order.

### Code

```python title="Python3 Code"
class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        res = []
        num_deque = collections.deque(nums)

        while num_deque:
            left = num_deque[0] ** 2
            right = num_deque[-1] ** 2

            if left > right:
                res.append(left)
                num_deque.popleft()
            else:
                res.append(right)
                num_deque.pop()

        return res[::-1]
```
