---
sidebar_position: 162
tags: [facebook]
---

# Sort Colors

### Problem Statement

Given an array `nums` with `n` objects colored red, white, or blue, sort them [in-place](https://en.wikipedia.org/wiki/In-place_algorithm) so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers `0`, `1`, and `2` to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

[Leetcode link](https://leetcode.com/problems/sort-colors)

#### Example 1:

```
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
```

#### Example 2:

```
Input: nums = [2,0,1]
Output: [0,1,2]
```

#### Constraints:

- `n == nums.length`
- `1 <= n <= 300`
- `nums[i]` is either `0`, `1`, or `2`.

### Code

```python title="Python Code"
class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        curr = 0
        for _ in range(len(nums)):
            if nums[curr] == 0:
                nums.pop(curr)
                nums.insert(0, 0)
                curr += 1
            elif nums[curr] == 2:
                nums.pop(curr)
                nums.append(2)
            else:
                curr += 1
        return
```
