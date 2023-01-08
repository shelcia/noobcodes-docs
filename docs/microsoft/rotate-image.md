---
sidebar_position: 21
tags: [microsoft]
---

# Rotate Image

### Problem Statement

You are given an `n x n` 2D `matrix` representing an image, rotate the image by **90** degrees (clockwise).

You have to rotate the image [in-place](https://en.wikipedia.org/wiki/In-place_algorithm), which means you have to modify the input 2D matrix directly. **DO NOT** allocate another 2D matrix and do the rotation.

#### Example 1:

![alt text](https://assets.leetcode.com/uploads/2020/08/28/mat1.jpg)

```
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
```

#### Example 2:

![alt text](https://assets.leetcode.com/uploads/2020/08/28/mat2.jpg)

```
Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
```

#### Constraints:

- `n == matrix.length == matrix[i].length`
- `1 <= n <= 20`
- `-1000 <= matrix[i][j] <= 1000`

[LeetCode Link](https://leetcode.com/problems/rotate-image)

### Code

```python title="Python Code"
class Solution(object):
    def rotate(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: None Do not return anything, modify matrix in-place instead.
        """
        rows, cols = len(matrix), len(matrix[0])
        for r in range(rows):
            for c in range(r, cols-r-1):
                sr, sc = r, c
                nr, nc = sc, rows-sr-1
                matrix[nr][nc], nval = matrix[sr][sc], matrix[nr][nc]
                while nr != sr or nc != sc:
                    nr, nc = nc, rows-nr-1
                    matrix[nr][nc], nval = nval, matrix[nr][nc]
```
