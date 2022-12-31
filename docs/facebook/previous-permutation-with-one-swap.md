---
sidebar_position: 91
tags: [facebook]
---

# Previous Permutation With One Swap

### Problem Statement

Given an array of positive integers arr (not necessarily distinct), return the
lexicographically largest permutation that is smaller than arr, that can be made with exactly one swap. If it cannot be done, then return the same array.

Note that a swap exchanges the positions of two numbers arr[i] and arr[j]

[Leetcode Link](https://leetcode.com/problems/previous-permutation-with-one-swap)

#### Example 1:

```
Input: arr = [3,2,1]
Output: [3,1,2]
Explanation: Swapping 2 and 1.
```

#### Example 2:

```
Input: arr = [1,1,5]
Output: [1,1,5]
Explanation: This is already the smallest permutation.
```

#### Example 3:

```
Input: arr = [1,9,4,6,7]
Output: [1,7,4,6,9]
Explanation: Swapping 9 and 7.
```

#### Constraints:

- 1 <= arr.length <= 10<sup>4</sup>
- 1 <= arr[i] <= 10<sup>4</sup>

### Code

```python title="Python Code"
class Solution:
    def prevPermOpt1(self, A: List[int]) -> List[int]:
        pre = []
        for i in range(len(A) - 1, -1, -1):
            bisect.insort_left(pre, (A[i], i))
            if pre.index((A[i], i)):
                j = pre[pre.index((A[i], i)) - 1][1]
                A[i], A[j] = A[j], A[i]
                break
        return A

```
