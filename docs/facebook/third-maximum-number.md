---
sidebar_position: 193
tags: [facebook]
---

# Third Maximum Number

### Problem Statement

Given an integer array `nums`, return the third distinct maximum number in this array. If the third maximum does not exist, return the **maximum number**.

[Leetcode Link](https://leetcode.com/problems/third-maximum-number)

#### Example 1:

```
Input: nums = [3,2,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2.
The third distinct maximum is 1.
```

#### Example 2:

```
Input: nums = [1,2]
Output: 2
Explanation:
The first distinct maximum is 2.
The second distinct maximum is 1.
The third distinct maximum does not exist, so the maximum (2) is returned instead.
```

#### Example 3:

```
Input: nums = [2,2,3,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2 (both 2's are counted together since they have the same value).
The third distinct maximum is 1.
```

#### Constraints:

- `1` `<=` `nums.length` `<=` `10`<sup>4</sup>
- `-2`<sup>31</sup> `<=` `nums[i]` `<=` `2`<sup>31</sup> `-1`

### Code

```python title="Python Code"

class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        if len(nums) >= 3:
            checked = set()
            count = 0
            nums.sort()
            for i in range(len(nums) - 1, -1, -1):
                if nums[i] not in checked:
                    if count == 2:
                        return nums[i]
                    else:
                        checked.add(nums[i])
                        count += 1
            return max(nums)
        else:
            return max(nums)
```
