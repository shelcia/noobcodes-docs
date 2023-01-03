---
sidebar_position: 24
tags: [airbnb]
---

# Median of Two Sorted Arrays

### Problem Statement

Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays.

The overall run time complexity should be `O(log (m+n))`.

[Leetcode Link](https://leetcode.com/problems/median-of-two-sorted-arrays/)

#### Example 1:

```
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
```

##### Explanation:

`merged array = [1,2,3]` and median is **2**.

#### Example 2:

```
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
```

##### Explanation:

`merged array = [1,2,3,4]` and median is **(2 + 3) / 2 = 2.5**.

#### Constraints:

- `nums1.length == m`
- `nums2.length == n`
- `0 <= m <= 1000`
- `0 <= n <= 1000`
- `1 <= m + n <= 2000`
- -10<sup>6</sup> `<=` `nums1[i]`, `nums2[i]` `<=` 10<sup>6</sup>

### Code

```python title="Python Code"

class Solution:
    def findMedianSortedArrays(self, A, B):
        l = len(A) + len(B)
        if l % 2 == 1:
            return self.kth(A, B, l // 2)
        else:
            return (self.kth(A, B, l // 2) + self.kth(A, B, l // 2 - 1)) / 2.

    def kth(self, a, b, k):
        if not a:
            return b[k]
        if not b:
            return a[k]
        ia, ib = len(a) // 2 , len(b) // 2
        ma, mb = a[ia], b[ib]

        # when k is bigger than the sum of a and b's median indices
        if ia + ib < k:
            # if a's median is bigger than b's, b's first half doesn't include k
            if ma > mb:
                return self.kth(a, b[ib + 1:], k - ib - 1)
            else:
                return self.kth(a[ia + 1:], b, k - ia - 1)
        # when k is smaller than the sum of a and b's indices
        else:
            # if a's median is bigger than b's, a's second half doesn't include k
            if ma > mb:
                return self.kth(a[:ia], b, k)
            else:
                return self.kth(a, b[:ib], k)
```
