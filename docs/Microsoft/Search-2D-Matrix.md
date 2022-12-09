---
sidebar_position: 12
tags: [Microsoft]
---

# Search 2D Matrix

### Problem Statement

Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom

#### Examples :

```
Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
Output: true


Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
Output: false


```

### Code

```jsx title="Java Code"

class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        if(matrix== null || matrix.length<1 || matrix[0].length<1)  return false;
           int i=0;
        int j = matrix[0].length - 1;

        while(i < matrix.length && j>=0) {

            if(matrix[i][j]==target) {
                return true;
            }
            else if(matrix[i][j]>target) j--;
            else {
                i++;
            }
        }
        return false;
    }
}
```
