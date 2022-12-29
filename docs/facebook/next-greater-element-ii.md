---
sidebar_position: 44
tags: [facebook]
---

# Next Greater Element II

### Problem Statement

Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.

The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.

[Leetcode Link](https://leetcode.com/problems/next-greater-element-ii)

#### Example 1:

```
Input: nums = [1,2,1]
Output: [2,-1,2]
Explanation: The first 1's next greater number is 2;
The number 2 can't find next greater number.
The second 1's next greater number needs to search circularly, which is also 2.
```

#### Example 2:

```
Input: nums = [1,2,3,4,3]
Output: [2,3,4,-1,4]
```

#### Constraints:

- 1 <= nums.length <= 10<sup>4</sup>
- -10<sup>9</sup> <= nums[i] <= 10<sup>9</sup>

### Code

```python title="Python Code"
class Solution(object):
    def nextGreaterElements(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        res, n, s, maxi = [-1] * len(nums), len(nums), [], float('-inf')
        for i, num in enumerate(nums):
            while s and nums[s[-1]] < num:
                res[s.pop()] = num
            s.append(i)
            maxi = max(maxi, num)

        for i, num in enumerate(nums):
            while s and nums[s[-1]] < num:
                res[s.pop()] = num
            if num == maxi:
                break
        return res
```
