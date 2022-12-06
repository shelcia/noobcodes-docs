---
sidebar_position: 9
tags: [paypal, array, dynamic programming]
---

# Partition Equal Subset Sum

### Problem Statement

Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

### Examples

```
Example 1:

Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].

Example 2:

Input: nums = [1,2,3,5]
Output: false
Explanation: The array cannot be partitioned into equal sum subsets.
```

### Constraints

```
1 <= nums.length <= 200
1 <= nums[i] <= 100
```

### Code

```jsx title="Python3 Code"

class Solution:
    def isSubSet(self, nums, n, dp, total):
        if total==0:
            return True
        if n==-1:
            return False
        if dp[n][total]!=-1:
            return dp[n][total]
        if nums[n]>total:
            dp[n][total] = self.isSubSet(nums,n-1,dp,total)
        dp[n][total] = self.isSubSet(nums,n-1,dp,total) or self.isSubSet(nums,n-1,dp,total-nums[n])
        return dp[n][total]

    def canPartition(self, nums: List[int]) -> bool:
        total = sum(nums)
        if total%2 == 1:
            return False
        dp = [[-1 for i in range(total//2 + 1)] for j in range(len(nums))]
        return self.isSubSet(nums,len(nums)-1,dp, total//2)
```
