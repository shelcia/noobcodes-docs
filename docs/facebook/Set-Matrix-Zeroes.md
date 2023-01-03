---
sidebar_position: 141
tags: [facebook, matrix]
---

# Set Matrix Zeroes

### Problem Statement

Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's

[Leetcode link](https://leetcode.com/problems/set-matrix-zeroes/)

#### Example 1 :

```
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
```

#### Example 2 :

```
Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
```

### Constraints:

- m == matrix.length
- n == matrix[0].length
- 1 <= m, n <= 200
- -2<sup>31</sup> <= matrix[i][j] <= 2<sup>31</sup> - 1

### Code

```jsx title="Java Code"
class Solution {
    public void setZeroes(int[][] matrix) {
        int m = matrix.length;
        int n= matrix[0].length;


        int[] row = new int[m];
        int[] col = new int[n];

        for(int i=0;i<m;i++){
            for(int j=0;j<n;j++){
                if(matrix[i][j]==0){
                    row[i]=1;
                    col[j]=1;
                }
            }
        }
         for(int i=0;i<m;i++){
            for(int j=0;j<n;j++){
                if(row[i]==1   || col[j]==1){
                    matrix[i][j]=0;
                }
            }
        }


    return ;
    }
}




```
