---
sidebar_position: 10
tags: [amazon, array]
---

# Contiguous Array

### Problem Statement

Find the first circular tour that visits all petrol pumps.
[LeetCode link](https://leetcode.com/problems/contiguous-array/)

Write an efficient program to find the sum of contiguous subarray
within a one-dimensional array of numbers that has the largest sum.

We will use Kandane Algorithm
We will keep track of all positive segments of thr array
_Time Complexity - O(n)_

### Code

```python title="Python Code"
def findContiguous(arr):
    max_so_far = 0
    max_current = 0

    for i in range(len(arr)):
        max_current = max_current + arr[i]

        if(max_current < 0):
            max_current = 0
        elif(max_so_far < max_current):
            max_so_far = max_current

    print(max_so_far)


if __name__ == '__main__':
    arr = [-2, -3, 4, -1, -2, 1, 5, -3]
    findContiguous(arr)
```
