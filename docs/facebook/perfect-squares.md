---
sidebar_position: 80
tags: [facebook]
---

# Perfect Squares

### Problem Statement

Given an integer n, return the least number of perfect square numbers that sum to n.

A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

[Leetcode link](https://leetcode.com/problems/perfect-squares/)

#### Example 1:

```
Input: n = 12
Output: 3
Explanation: 12 = 4 + 4 + 4.
```

#### Example 2:

```
Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.
```

#### Constraints:

- 1 <= n <= 10<sup>4</sup>

### Code

```python title="Python Code"
class Solution:
    def numSquares(self, n):
        if n < 2:
            return n
        lst = []
        i = 1
        while i * i <= n:
            lst.append( i * i )
            i += 1
        cnt = 0
        toCheck = {n}
        while toCheck:
            cnt += 1
            temp = set()
            for x in toCheck:
                for y in lst:
                    if x == y:
                        return cnt
                    if x < y:
                        break
                    temp.add(x-y)
            toCheck = temp

        return cnt

```
