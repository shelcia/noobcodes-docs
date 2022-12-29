---
sidebar_position: 33
tags: [facebook]
---

# Minimum Swaps To Make Sequences Increasing

### Problem Statement

You are given two integer arrays of the same length nums1 and nums2. In one operation, you are allowed to swap nums1[i] with nums2[i].

For example, if nums1 = [1,2,3,8], and nums2 = [5,6,7,4], you can swap the element at i = 3 to obtain nums1 = [1,2,3,4] and nums2 = [5,6,7,8].

Return the minimum number of needed operations to make nums1 and nums2 strictly increasing. The test cases are generated so that the given input always makes it possible.

An array arr is strictly increasing if and only if arr[0] < arr[1] < arr[2] < ... < arr[arr.length - 1]

[Leetcode link](https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing)

#### Example 1:

```
Input: nums1 = [1,3,5,4], nums2 = [1,2,3,7]
Output: 1
Explanation:
Swap nums1[3] and nums2[3]. Then the sequences are:
nums1 = [1, 3, 5, 7] and nums2 = [1, 2, 3, 4]
which are both strictly increasing.
```

#### Example 2:

```
Input: nums1 = [0,3,5,8,9], nums2 = [2,1,4,6,9]
Output: 1
```

#### Constraints:

- 2 <= nums1.length <= 10<sup>5</sup>
- nums2.length == nums1.length
- 0 <= nums1[i], nums2[i] <= 2 \* 10<sup>5</sup>

### Code

```python title="Python Code"
class Solution:
    def _minSwap(self, A, B, i, cache, swapped):
        if (swapped, i) in cache:
            return cache[(swapped, i)]
        if i == len(A):
            return 0
        l_min = math.inf if i > 0 and (A[i] <= A[i - 1] or B[i] <= B[i - 1]) else self._minSwap(A, B, i + 1, cache, 0)
        A[i], B[i] = B[i], A[i]
        r_min = math.inf if i > 0 and (A[i] <= A[i - 1] or B[i] <= B[i - 1]) else self._minSwap(A, B, i + 1, cache, 1)
        A[i], B[i] = B[i], A[i]
        cache[(swapped, i)] = min(l_min, r_min + 1)
        return cache[(swapped, i)]

    def minSwap(self, A, B):
        if len(A) == 1: return 0
        return self._minSwap(A, B, 0, {}, 0)

```
