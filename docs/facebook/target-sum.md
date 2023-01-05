---
sidebar_position: 189
tags: [facebook]
---

# Target Sum

### Problem Statement

You are given an integer array nums and an integer target.

You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.

- For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".

Return the number of different expressions that you can build, which evaluates to target.

[Leetcode Link](https://leetcode.com/problems/target-sum)

### Examples:

```
Example 1:

Input: nums = [1,1,1,1,1], target = 3
Output: 5
Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3


Example 2:

Input: nums = [1], target = 1
Output: 1
```

#### Constraints:

- 1 <= nums.length <= 20
- 0 <= nums[i] <= 1000
- 0 <= sum(nums[i]) <= 1000
- -1000 <= target <= 1000

### Code

```python title="Python Code"

class Solution(object):
    def findTargetSumWays(self, nums, target):
        res = {}  # key = (index, target), value = count of feasible solutions for nums[index+1:] with target sum = target

        def dfs(index, target):
            if (index, target) not in res:
                if index == len(nums):
                    count = 1 if target == 0 else 0
                else:
                    count = dfs(index+1, target-nums[index]) + dfs(index+1, target+nums[index])
                res[(index, target)] = count
            return res[(index, target)]

        return dfs(0, target)
```
