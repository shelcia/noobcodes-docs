---
sidebar_position: 78
tags: [facebook]
---

# Peak Index in a Mountain Array

### Problem Statement

An array arr a mountain if the following properties hold:

- arr.length >= 3
- There exists some i with 0 < i < arr.length - 1 such that:
  - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
  - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

Given a mountain array arr, return the index i such that arr[0] < arr[1] < ... < arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

You must solve it in O(log(arr.length)) time complexity.

[Leetcode link](https://leetcode.com/problems/peak-index-in-a-mountain-array/)

#### Example 1:

```
Input: arr = [0,1,0]
Output: 1
```

#### Example 2:

```
Input: arr = [0,2,1,0]
Output: 1
```

#### Example 3:

```
Input: arr = [0,10,5,2]
Output: 1
```

#### Constraints:

- 3 <= arr.length <= 10<sup>5</sup>
- 0 <= arr[i] <= 10<sup>6</sup>
- arr is guaranteed to be a mountain array.

### Code

```python title="Python Code"
class Solution:
    def peakIndexInMountainArray(self, A: List[int]) -> int:
        for i in range(1, len(A)):
            if A[i] > A[i + 1]:
                return i

```
