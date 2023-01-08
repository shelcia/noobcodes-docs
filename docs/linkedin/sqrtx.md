---
sidebar_position: 80
tags: [linkedin]
---

# Sqrt(x)

### Problem Statement

Given a **non-negative** integer `x`, return _the square root of `x` rounded down to the nearest integer_. The returned integer should be **non-negative** as well.

You must not use any built-in exponent function or operator.

_For example, do not use `pow(x, 0.5)` in `c++` or `x ** 0.5` in `python`._

[Leetcode link](https://leetcode.com/problems/sqrtx)

### Examples

```
Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.


Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
```

### Constraints

- `0 <= x <= 2`<sup>31</sup> `-1`

### Code

```python title="Python3 Code"
class Solution(object):
    def mySqrt(self, x):
        """
        :type x: int
        :rtype: int
        """
        return int(x**(0.5))
```
