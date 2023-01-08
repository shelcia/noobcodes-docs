---
sidebar_position: 24
tags: [uber]
---

# Majority Element II

### Problem Statement

Given an integer array of size `n`, find all elements that appear more than `⌊ n/3 ⌋` times.

[Leetcode Link](https://leetcode.com/problems/majority-element-ii/)

#### Example 1:

```
Input: nums = [3,2,3]
Output: [3]
```

#### Example 2:

```
Input: nums = [1]
Output: [1]
```

#### Example 3:

```
Input: nums = [1,2]
Output: [1,2]
```

#### Constraints:

- `1 <= nums.length <= 5 * 10`<sup>4</sup>
- `-10`<sup>9</sup> `<= nums[i] <= 10`<sup>9</sup>

### Code

```python title="Python Code"

class Solution(object):
    def majorityElement(self, nums):

        ans = []
        l = len(nums)
        nums_set = set(nums)

        for n in nums_set:
            if nums.count(n) > l / 3:
                ans.append(n)

        return ans
```
