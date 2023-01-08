---
sidebar_position: 106
tags: [amazon]
---

# Combination Sum IV

### Problem Statement

Given an array of distinct integers `nums` and a `target` integer `target`, return the number of possible combinations that add up to `target`.

The test cases are generated so that the answer can fit in a **32-bit integer**.

[LeetCode link](https://leetcode.com/problems/combination-sum-iv)

#### Example 1:

```
Input: nums = [1,2,3], target = 4
Output: 7
Explanation:
The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)
Note that different sequences are counted as different combinations.
```

#### Example 2:

```
Input: nums = [9], target = 3
Output: 0
```

#### Constraints:

- `1 <= nums.length <= 200`
- `1 <= nums[i] <= 1000`
- All the elements of `nums` are **unique**.
- `1 <= target <= 1000`

### Code

```python title="Python Code"
class Solution(object):
        def combinationSum4(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        def recCount(startIdx, nums, target, mem):
            if target == 0:
                return 1
            if target < 0:
                return 0
            if (startIdx, target) in mem:
                return mem[(startIdx, target)]

            mem[(startIdx, target)] = 0
            for i in range(startIdx, startIdx + len(nums)):
                # circle the nums array starting from the given startIdx
                # not exclude the current num pointed by the startIdx for the next recursion
                mem[(startIdx, target)] += recCount(i % len(nums), nums, target - nums[i % len(nums)], mem)
            return mem[(startIdx, target)]

        # memorize each pair of starting Idx and target
        mem = {}
        return recCount(0, nums, target, mem)
```
