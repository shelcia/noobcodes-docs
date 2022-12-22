---
sidebar_position: 18
tags: [adobe]
---

# Maximum Sub-array

### Problem Statement

Given an integer array `nums`, find the 
subarray which has the largest sum and return its sum.

[Leetcode Link](https://leetcode.com/problems/maximum-subarray/)

#### Example 1:


```
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```

#### Example 2:

```
Input: nums = [1]
Output: 1
```

#### Example 3:

```
Input: nums = [5,4,-1,7,8]
Output: 23
```

#### Constraints:

- 1 <= nums.length <= 10<sup>5</sup>
- -10<sup>4</sup> <= nums[i] <= 10<sup>4</sup>

### Code

```python title="Python Code"

class Solution:
    # @param A, a list of integers
    # @return an integer
    # 6:57
    def maxSubArray(self, A):
        if not A:
            return 0

        curSum = maxSum = A[0]
        for num in A[1:]:
            curSum = max(num, curSum + num)
            maxSum = max(maxSum, curSum)

        return maxSum
```

