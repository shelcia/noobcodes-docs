---

sidebar_position: 23
tags: [amazon, matrix]
---

# Set Matrix Zeroes

### Problem Statement

Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's



#### Examples :



Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]





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
