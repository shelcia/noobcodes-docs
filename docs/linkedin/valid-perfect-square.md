---
sidebar_position: 90
tags: [linkedin]
---

# Valid Perfect Square

### Problem Statement

Given a positive integer `num`, return true if `num` is a **perfect square** or `false` otherwise.

A **perfect square** is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

You must not use any built-in library function, such as `sqrt`.

[Leetcode Link](https://leetcode.com/problems/valid-perfect-square/)

#### Example 1:

```
Input: num = 16
Output: true

Explanation: We return true because 4 * 4 = 16 and 4 is an integer.
```

#### Example 2:

```
Input: num = 14
Output: false

Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.
```

#### Constraints:

- `1 <= num <= 2`<sup>31</sup> `-1`

### Code

```python title="Python"
class Solution5:
    def isPerfectSquare(self, num: int) -> bool:
        if num==1:
            return True
        for i in range(2,num//2+1):
            if num/i < i:
                break
            if num/i == i:
                return True
        return False
```
