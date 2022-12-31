---
sidebar_position: 45
tags: [facebook]
---

# Next Greater Element III

### Problem Statement

Given a positive integer n, find the smallest integer which has exactly the same digits existing in the integer n and is greater in value than n. If no such positive integer exists, return -1.

Note that the returned integer should fit in 32-bit integer, if there is a valid answer but it does not fit in 32-bit integer, return -1.

[Leetcode Link](https://leetcode.com/problems/next-greater-element-iii)

#### Example 1:

```
Input: n = 12
Output: 21
```

#### Example 2:

```
Input: n = 21
Output: -1
```

#### Constraints:

- 1 <= n <= 2<sup>31</sup> - 1

### Code

```python title="Python Code"
class Solution(object):
    def nextGreaterElement(self, n):
        if not n: return -1
        s = str(n)
        arr = [c for c in s]
        i = len(arr)-1
        while i > 0:
            prev = int(arr[i-1])
            if int(arr[i]) > prev:
                j = i
                # looking for right position to swap
                while j < len(arr) and int(arr[j]) > prev:
                    j += 1
                arr[i-1], arr[j-1], j = arr[j-1], arr[i-1], len(arr)-1
                # reverse array from pivot point til end
                while i < j:
                    arr[i], arr[j] = arr[j], arr[i]
                    i += 1; j -= 1
                res = int(''.join(arr))
                # check 32 bit constraint
                return -1 if res > 2147483647 else res
            i -= 1
        return -1
```
