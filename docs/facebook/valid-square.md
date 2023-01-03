---
sidebar_position: 223
tags: [facebook]
---

# Valid Parenthesis String

### Problem Statement

Given the coordinates of four points in 2D space p1, p2, p3 and p4, return true if the four points construct a square.

The coordinate of a point pi is represented as [xi, yi]. The input is not given in any order.

A valid square has four equal sides with positive length and four equal angles (90-degree angles).

[Leetcode Link](https://leetcode.com/problems/valid-square)

### Examples:

```
Example 1:

Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
Output: true

Example 2:

Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,12]
Output: false

Example 3:

Input: p1 = [1,0], p2 = [-1,0], p3 = [0,1], p4 = [0,-1]
Output: true
```

### Constraints:

- p1.length == p2.length == p3.length == p4.length == 2
- -10<sup>4</sup> <= xi, yi <= 10<sup>4</sup>

### Code

```python title="Python Code"
class Solution:
    def validSquare(self, p1, p2, p3, p4):
        def dist(p,q):
            return (p[0]-q[0])**2 + (p[1]-q[1])**2

        def check(p1,p2,p3,p4):
            if p1[0]+p2[0] != p3[0]+p4[0] or p1[1]+p2[1] != p3[1]+p4[1]: return False
            if dist(p1,p2) != dist(p3,p4) or dist(p1,p4) != dist(p2,p4): return False
            if p1 == p2: return False
            return True

        return check(p1,p2,p3,p4) or check(p1,p3,p2,p4) or check(p1,p4,p2,p3)
```
