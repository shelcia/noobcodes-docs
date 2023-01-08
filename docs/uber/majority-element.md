---
sidebar_position: 23
tags: [uber]
---

# Majority Element

### Problem Statement

Given an array nums of size `n`, return the majority element.

The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.

[Leetcode Link](https://leetcode.com/problems/majority-element/)

#### Example 1:

```
Input: nums = [3,2,3]
Output: 3
```

#### Example 2:

```
Input: nums = [2,2,1,1,1,2,2]
Output: 2
```

#### Constraints:

- `n == nums.length`
- `1 <= n <= 5 * 10`<sup>4</sup>
- `-10`<sup>9</sup> `<= nums[i] <= 10`<sup>9</sup>

### Code

```python title="Python Code"

class Solution:
    def majorityElement(self, nums):
        from collections import Counter
        return Counter(nums).most_common()[0][0]
```
