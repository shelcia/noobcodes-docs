---
sidebar_position: 21
tags: [linkedin]
---

# Find K Closest Elements

### Problem Statement

Given a **sorted** integer array `arr`, two integers `k` and `x`, return the `k` closest integers to `x` in the array. The result should also be sorted in ascending order.

An integer `a` is closer to `x` than an integer `b` if:

- `|a - x| < |b - x|`, or
- `|a - x| == |b - x|` and a < b

[Leetcode Link](https://leetcode.com/problems/find-k-closest-elements/)

#### Example 1:

```
Input: arr = [1,2,3,4,5], k = 4, x = 3
Output: [1,2,3,4]
```

#### Example 2:

```
Input: arr = [1,2,3,4,5], k = 4, x = -1
Output: [1,2,3,4]
```

#### Constraints:

- 1 <= k <= arr.length
- 1 <= arr.length <= 10<sup>4</sup>
- arr is sorted in ascending order.
- -10<sup>4</sup> <= arr[i], x <= 10<sup>4</sup>

### Code

```python title="Python"
   def findClosestElements(self, A, k, x):
        left, right = 0, len(A) - k
        while left < right:
            mid = (left + right) / 2
            if x - A[mid] > A[mid + k] - x:
                left = mid + 1
            else:
                right = mid
        return A[left:left + k]
```
