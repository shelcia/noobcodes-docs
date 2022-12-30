---
sidebar_position: 89
tags: [facebook]
---

# Pow(x, n)

### Problem Statement

Implement pow(x, n), which calculates x raised to the power n (i.e., x<sup>n</sup>).

[Leetcode Link](https://leetcode.com/problems/powx-n)

#### Example 1:

```
Input: x = 2.00000, n = 10
Output: 1024.00000
```

#### Example 2:

```
Input: x = 2.10000, n = 3
Output: 9.26100
```

#### Example 3:

```
Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
```

#### Constraints:

- -100.0 < x < 100.0
- -2<sup>31</sup> <= n <= 2<sup>31</sup>-1
- n is an integer.
- -10<sup>4</sup> <= x<sup>n</sup> <= 10<sup>4</sup>

### Code

```python title="Python Code"
class Solution:
    # @param {float} x
    # @param {integer} n
    # @return {float}
    def myPow(self, x, n):
        if n < 0:
            return 1 / self.pow(x, -n)
        else:
            return self.pow(x, n)

    def pow(self, x, n):
        if n == 0:
            return 1

        temp = self.pow(x, n / 2)
        if n % 2 == 0:
            return temp * temp
        else:
            return temp * temp * x

```
