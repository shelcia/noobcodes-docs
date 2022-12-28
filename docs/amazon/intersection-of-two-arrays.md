---
sidebar_position: 142
tags: [amazon]
---

# Intersection of Two Arrays

### Problem Statement

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

[Leetcode Link](https://leetcode.com/problems/intersection-of-two-arrays/)

#### Example 1:

```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
```

#### Example 2:

```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
```

#### Constraints:

- 1 <= nums1.length, nums2.length <= 1000
- 0 <= nums1[i], nums2[i] <= 1000

### Code

```python title="Python Code"

class Solution(object):
    def intersection(self, nums1, nums2):
        return list(set([i for i in nums1 if i in nums2]))
```
