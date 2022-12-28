---
sidebar_position: 80
tags: [amazon]
---

# Partition To k Equal Sum Subsets

### Problem Statement

Given an integer array nums and an integer k, return true if it is possible to divide this array into k non-empty subsets whose sums are all equal.

[Leetcode link](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/)

#### Example 1:

```
Input: nums = [4,3,2,3,5,2,1], k = 4
Output: true
Explanation: It is possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.
```

#### Example 2:

```
Input: nums = [1,2,3,4], k = 3
Output: false
```

#### Constraints:

- 1 <= k <= nums.length <= 16
- 1 <= nums[i] <= 10<sup>4</sup>
- The frequency of each element is in the range [1, 4].

### Code

```jsx title="Python"
class Solution(object):
    def canPartitionKSubsets(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: bool
        """
        if len(nums) < k or sum(nums) % k != 0 :
            return False
        sub_sum = sum(nums) / k
        if any(num > sub_sum for num in nums):
            return False
        nums.sort()
        return self.dfs(sub_sum,nums[-1], nums[: -1])

    def dfs(self, sub_sum, cur_sum, nums):
        if cur_sum == sub_sum:

            if not nums:
                return True
            return self.dfs(sub_sum, nums[-1], nums[: -1])
        size = len(nums)
        for index in xrange(size):
            tmp = nums[index]
            if nums[index] + cur_sum <= sub_sum:
                nums[index], nums[-1] = nums[-1], nums[index]
                nums.pop()
                if self.dfs(sub_sum, cur_sum + tmp, nums):
                    return True
                nums.append(tmp)
                nums[index], nums[-1] = nums[-1], nums[index]
        return False

```
