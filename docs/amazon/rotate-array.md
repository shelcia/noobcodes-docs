---
sidebar_position: 20
tags: [amazon]
---

# Rotate Array

### Problem Statement

Write a function rotate(ar[], d, n) that rotates arr[] of size n by d elements.
[LeetCode link](https://leetcode.com/problems/rotate-array/)

### Code

```jsx title="Python Code"
def rotateLeftArray(arr, k):
    n = len(arr)
    if k > n:
        k = k % n

    temp = arr[:k]
    for i in range(k, n):
        arr[i-k] = arr[i]
    arr = arr[:n-k]
    arr = arr + temp
    print(arr)


def rotateRightArray(arr, k):
    n = len(arr)
    if k > n:
        k = k % n

    temp = arr[k+1:]
    print(temp + arr[:n-k])


# rotateLeftArray([1, 2, 3, 4, 5, 6, 7], 2)  # [3, 4, 5, 6, 7, 1, 2]

rotateRightArray([1, 2, 3, 4, 5, 6, 7], 3)  # [5,6,7,1,2,3,4]
```
