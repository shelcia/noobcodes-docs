---
sidebar_position: 57
tags: [LinkedIn]
---

# Partition to K Equal Sum Subsets

### Problem Statement

Given an integer array nums and an integer k, return true if it is possible to divide this array into k non-empty subsets whose sums are all equal.

[Leetcode Link](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/)

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
class Solution:
    def canPartitionKSubsets(self, nums: List[int], k: int) -> bool:
        if sum(nums) % k != 0: return False
        target  = sum(nums) // k
        if any(num > target for num in nums): return False

        nums.sort()
        while target in nums:
            nums.remove(target)
            k -= 1

        seen = [False] * len(nums)

        @cache
        def bp(seen, i, total, k):
            if k == 0:                      return True
            if k == 1 and total == 0:       return True
            if i == len(nums) or total < 0: return False

            #Reset when we successfully find a partition sum == target
            if total == 0: 
                total = target
                k -= 1
                i = 0

            seen = list(seen)
            if seen[i] == False:
                seen[i] = True
                if bp(tuple(seen), i + 1, total - nums[i], k): return True
                seen[i] = False

            return bp(tuple(seen), i + 1, total, k) 

        return bp(tuple(seen), 0, target, k)
```