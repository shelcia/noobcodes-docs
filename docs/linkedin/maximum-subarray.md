---
sidebar_position: 51
tags: [LinkedIn]
---

# Maximum Subarray

### Problem Statement

Given an integer array nums, find the subarray which has the largest sum and return its sum.

[Leetcode link](https://leetcode.com/problems/maximum-subarray)

### Examples

```
Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Example 2:

Input: nums = [1]
Output: 1

Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
```

### Constraints

```
1 <= nums.length <= 105
-104 <= nums[i] <= 104

```

### Code

```python title="Python3 Code"

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        curr , maxi = float("-inf"),nums[0]

        for x in nums:
            curr = max(x,curr+x)
            #current greedily chooses
            # between either the current array value or
            #the previous curr+ the current arr value
            #that is the current subarrray sum
            maxi = max(maxi,curr)
            #print(curr,maxi)
        return maxi
```
