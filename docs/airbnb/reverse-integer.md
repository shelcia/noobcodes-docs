---
sidebar_position: 33
tags: [airbnb]
---

# Reverse Integer

### Problem Statement

Given a signed 32-bit integer `x`, return `x` with its digits reversed. If reversing `x` causes the value to go outside the signed 32-bit integer range [-2<sup>31</sup>, 2<sup>31</sup> - 1], then return `0`.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

[Leetcode Link](https://leetcode.com/problems/reverse-integer/)

#### Example 1:

```
Input: x = 123
Output: 321
```

#### Example 2:

```
Input: x = -123
Output: -321
```

#### Example 3:

```
Input: x = 120
Output: 21
```

#### Constraints:

- -2<sup>31</sup> <= x <= 2<sup>31</sup> - 1`

### Code

```python title="Python Code"

class Solution:
    def reverse(self, x: int) -> int:
        rev = int(str(abs(x))[::-1])
        return (-rev if x < 0 else rev) if rev.bit_length() < 32 else 0

```
