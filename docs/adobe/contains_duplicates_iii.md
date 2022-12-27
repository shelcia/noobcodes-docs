---
sidebar_position: 33
tags: [adobe]
---

# Contains Duplicate III

### Problem Statement

You are given an integer array nums and two integers indexDiff and valueDiff.

Find a pair of indices `(i, j)` such that:

- `i != j`,
- `abs(i - j) <= indexDiff.`
- `bs(nums[i] - nums[j]) <= valueDiff`, and

Return `true` if such pair exists or `false` otherwise.

[Leetcode Link](https://leetcode.com/problems/contains-duplicate-iii/)

#### Example 1:

```
Input: nums = [1,2,3,1], indexDiff = 3, valueDiff = 0
Output: true
Explanation: We can choose (i, j) = (0, 3).
We satisfy the three conditions:
i != j --> 0 != 3
abs(i - j) <= indexDiff --> abs(0 - 3) <= 3
abs(nums[i] - nums[j]) <= valueDiff --> abs(1 - 1) <= 0
```

#### Example 2:

```
Input: nums = [1,5,9,1,5,9], indexDiff = 2, valueDiff = 3
Output: false
Explanation: After trying all the possible pairs (i, j), we cannot satisfy the three conditions, so we return false.
```

#### Constraints:

- 2 <= nums.length <= 10<sup>5</sup>
- -10<sup>9</sup> <= nums[i] <= 10<sup>9</sup>
- `1 <= indexDiff <= nums.length`
- 0 <= valueDiff <= 10<sup>9</sup>
### Code

```python title="Python Code"

class Solution:
    def containsNearbyAlmostDuplicate(self, nums: List[int], k: int, t: int) -> bool:
        from sortedcontainers import SortedSet
        if not nums or t < 0: return False     # Handle special cases
        ss, n = SortedSet(), 0                 # Create SortedSet. `n` is the size of sortedset, max value of `n` is `k` from input
        for i, num in enumerate(nums):
            ceiling_idx = ss.bisect_left(num)  # index whose value is greater than or equal to `num`
            floor_idx = ceiling_idx - 1        # index whose value is smaller than `num`
            if ceiling_idx < n and abs(ss[ceiling_idx]-num) <= t: return True  # check right neighbour 
            if 0 <= floor_idx and abs(ss[floor_idx]-num) <= t: return True     # check left neighbour
            ss.add(num)
            n += 1
            if i - k >= 0:  # maintain the size of sortedset by finding & removing the earliest number in sortedset
                ss.remove(nums[i-k])
                n -= 1
        return False
    
```

