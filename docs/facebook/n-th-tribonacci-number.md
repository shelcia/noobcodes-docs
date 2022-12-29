---
sidebar_position: 50
tags: [facebook]
---

# N-th Tribonacci Number

### Problem Statement

The Tribonacci sequence Tn is defined as follows:

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.

[Leetcode Link](https://leetcode.com/problems/n-th-tribonacci-number)

#### Example 1:

```
Input: n = 4
Output: 4
Explanation:
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
```

#### Example 2:

```
Input: n = 25
Output: 1389537
```

#### Constraints:

- 0 <= n <= 37
- The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2<sup>31</sup> - 1.

### Code

```python title="Python Code"
class Solution(object):
    def tribonacci(self, n):
        a, b, c = 1, 0, 0
        for _ in xrange(n): a, b, c = b, c, a + b + c
        return c
```
