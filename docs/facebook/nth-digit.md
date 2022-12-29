---
sidebar_position: 49
tags: [facebook]
---

# Nth Digit

### Problem Statement

Given an integer n, return the nth digit of the infinite integer sequence [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...].

[Leetcode Link](https://leetcode.com/problems/nth-digit)

#### Example 1:

```
Input: n = 3
Output: 3
```

#### Example 2:

```
Input: n = 11
Output: 0
Explanation: The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a 0, which is part of the number 10.
```

#### Constraints:

- 1 <= n <= 2<sup>31</sup> - 1

### Code

```python title="Python Code"
class Solution(object):
    def findNthDigit(self, n):
        curr, prev = 10, 1
        for i in range(1, 32):

            if (n >= i * (curr - prev)):
# Decrese the no of digits found in previous powers
                n -= i * (curr - prev)
        # Just increment the current power of 10
                prev = curr
                curr *= 10
            else:
    # Apply a binary search in ( prev, curr)
                mid = (curr + prev) // 2
                while (prev < curr - 1):
                    note = (mid - prev) * i
                    if (note > n):
                        curr = mid
                    else:
                        n -= note
                        prev = mid
                    mid = (curr + prev) // 2

                mid += n // i
                n = n % i
                if (n == 0):
                    return (mid - 1) % 10
                else:
                    n = i + 1 - n
                    while (n > 1):
                        mid //= 10
                        n -= 1
                    return mid % 10
```
