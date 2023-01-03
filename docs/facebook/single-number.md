---
sidebar_position: 151
tags: [facebook]
---

# Single Number

### Problem Statement

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

[Leetcode Link](https://leetcode.com/problems/single-number)

#### Example 1:

```
Input: nums = [2,2,1]
Output: 1
```

#### Example 2:

```
Input: nums = [4,1,2,1,2]
Output: 4
```

#### Example 3:

```
Input: nums = [1]
Output: 1
```

#### Constraints:

- 1 <= nums.length <= 3 \* 10<sup>4</sup>
- -3 _ 10<sup>4</sup> <= nums[i] <= 3 _ 10<sup>4</sup>
- Each element in the array appears twice except for one element which appears only once.

### Code

```python title="Python"
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
	    return reduce(lambda total, el: total ^ el, nums)
```
