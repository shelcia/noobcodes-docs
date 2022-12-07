---
sidebar_position: 8
tags: [paypal, array, matrix]
---

# Spiral Matrix

### Problem Statement

Given an m x n matrix, return all elements of the matrix in spiral order.

### Examples

```
Example 1:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:

Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
Based on that, we return true.
```

### Constraints

```
m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100
```

### Code

```jsx title="Python3 Code"


class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        dirs = [(0, 1), (1, 0), (0, -1), (-1, 0)]
        steps = [len(matrix[0]), len(matrix) - 1]
        dir = 0
        x = 0
        y = -1
        res = []
        while steps[dir % 2] > 0:
            for _ in range(steps[dir % 2]):
                x += dirs[dir][0]
                y += dirs[dir][1]
                res.append(matrix[x][y])
            steps[dir % 2] -= 1
            dir = (dir + 1) % 4
        return res
```
