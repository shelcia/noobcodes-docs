---
sidebar_position: 96
tags: [amazon]
---

# Search 2D Matrix II

### Problem Statement

Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

- Integers in each row are sorted in ascending from left to right.
- Integers in each column are sorted in ascending from top to bottom.

[Leetcode link](https://leetcode.com/problems/search-a-2d-matrix-ii)

#### Examples :

```
Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
Output: true


Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
Output: false


```

### Code

```python title="Python Code"
class Solution:
    def searchMatrix(self, matrix, target):
    """
    :type matrix: List[List[int]]
    :type target: int
    :rtype: bool
    """
    #print "matrix = ", matrix
    #print "target = ", target

    numRows = len(matrix)
    #print "numRows = ", numRows
    if numRows < 1:
        return False
    numCols = len(matrix[0])
    if numCols < 1:
        return False

    #print "numRows = ", numRows, " numCols = ", numCols

    lower_bound_idx_row, lower_bound_idx_col = 0, 0
    upper_bound_idx_row, upper_bound_idx_col = numRows - 1,  numCols - 1


    #print "lower_bound_idx_row = ", lower_bound_idx_row, " lower_bound_idx_col = ", lower_bound_idx_col
    #print "upper_bound_idx_row = ", upper_bound_idx_row, " upper_bound_idx_col = ", upper_bound_idx_col

    def verifyIdx(needVerifyIdxRow, needVerifyIdxCol):
        if needVerifyIdxRow < 0 or needVerifyIdxRow >= numRows or needVerifyIdxCol < 0 or needVerifyIdxCol >= numCols:
            return False
        else:
            return True


    while (matrix[lower_bound_idx_row][lower_bound_idx_col] < target):

        if verifyIdx(lower_bound_idx_row+1, lower_bound_idx_col+1) == True and matrix[lower_bound_idx_row+1][lower_bound_idx_col+1] < target:
            lower_bound_idx_row += 1
            lower_bound_idx_col += 1
        else:
            break
    #print "after modify, lower_bound_idx_row = ", lower_bound_idx_row, " lower_bound_idx_col = ", lower_bound_idx_col

    while (matrix[upper_bound_idx_row][upper_bound_idx_col] > target):

        if verifyIdx(upper_bound_idx_row-1, upper_bound_idx_col-1) == True and matrix[upper_bound_idx_row-1][upper_bound_idx_col-1] > target:
            upper_bound_idx_row -= 1
            upper_bound_idx_col -= 1
        else:
            break
    #print "after modify, upper_bound_idx_row = ", upper_bound_idx_row, " upper_bound_idx_col = ", upper_bound_idx_col

    for curRow in range(numRows):
        for curCol in range(numCols):
            #print "curRow = ", curRow, " curCol = ", curCol

            if (curRow < lower_bound_idx_row and curCol < lower_bound_idx_col) or (curRow > upper_bound_idx_row and curCol > upper_bound_idx_col):
                #print "this is out or range, don't test"
                continue

            if matrix[curRow][curCol] == target:
                return True

    return False
```
