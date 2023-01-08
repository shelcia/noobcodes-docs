---
sidebar_position: 23
tags: [facebook]
---

# Minimum Area Rectangle

### Problem Statement

You are given an array of `points` in the X-Y plane points where `points[i] = [xi, yi]`.

Return the minimum area of a rectangle formed from these points, with sides parallel to the X and Y axes. If there is not any such rectangle, return `0`.

[Leetcode link](https://leetcode.com/problems/minimum-area-rectangle)

#### Example 1:

![ex1](https://assets.leetcode.com/uploads/2021/08/03/rec1.JPG)

```
Input: points = [[1,1],[1,3],[3,1],[3,3],[2,2]]
Output: 4
```

#### Example 2:

![ex2](https://assets.leetcode.com/uploads/2021/08/03/rec2.JPG)

```
Input: points = [[1,1],[1,3],[3,1],[3,3],[4,1],[4,3]]
Output: 2
```

#### Constraints:

- `1 <= points.length <= 500`
- `points[i].length == 2`
- `0` `<=` x<sub>i</sub>, y<sub>i</sub> `<=` 4 \* 10<sup>4</sup>
- All the given points are **unique**.

### Code

```python title="Python Code"
class Solution:
    def minAreaRect(self, points):
        seen = set()
        res = float('inf')
        for x1, y1 in points:
            for x2, y2 in seen:
                if (x1, y2) in seen and (x2, y1) in seen:
                    area = abs(x1 - x2) * abs(y1 - y2)
                    if area and area < res:
                        res = area
            seen.add((x1, y1))
        return res if res < float('inf') else 0

```
