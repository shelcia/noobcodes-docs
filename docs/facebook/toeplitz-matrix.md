---
sidebar_position: 195
tags: [facebook]
---

# Toeplitz Matrix

### Problem Statement

Given an `m x n` matrix, return `true` if the matrix is **Toeplitz**. Otherwise, return `false`.

A matrix is **Toeplitz** if every diagonal from **top-left** to **bottom-right** has the same elements.

[Leetcode Link](https://leetcode.com/problems/toeplitz-matrix)

#### Example 1:

![ex1](https://assets.leetcode.com/uploads/2020/11/04/ex1.jpg)

```
Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
Output: true
Explanation:
In the above grid, the diagonals are:
"[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
In each diagonal all elements are the same, so the answer is True.
```

#### Example 2:

![ex1](https://assets.leetcode.com/uploads/2020/11/04/ex2.jpg)

```
Input: matrix = [[1,2],[2,2]]
Output: false
Explanation:
The diagonal "[1, 2]" has different elements.
```

#### Constraints:

- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 20`
- `0 <= matrix[i][j] <= 99`

### Code

```python title="Python Code"

class Solution:
    def isToeplitzMatrix(self, matrix: List[List[int]])->bool:
        r_len, c_len = len(matrix),len(matrix[0])

        for r in range (1, r_len):
            for c in range (1, c_len):
                if matrix[r][c]!=matrix[r-1][c-1]:
                    return False

        return True
```
