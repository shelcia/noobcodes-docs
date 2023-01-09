---
sidebar_position: 3
tags: [atlassian]
---

# Number of Islands

### Problem Statement

Given an `m x n` 2D binary grid `grid` which represents a map of `'1'`s (land) and `'0'`s (water), return the _number of islands._

An **island** is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

#### Example 1:

```
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
```

#### Example 2:

```
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
```

#### Constraints:

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 300`
- `grid[i][j]` is `'0'` or `'1'`.

### Code

```python title="Python Code"
class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:

        def turn_to_dust(i,j):
            if (i<0 or j<0 or i==len(grid) or j==len(grid[0]) or grid[i][j]=="0"):
                return
            grid[i][j]="0"
            turn_to_dust(i,j+1)
            turn_to_dust(i,j-1)
            turn_to_dust(i+1,j)
            turn_to_dust(i-1,j)
            return
        res=0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j]=="1":
                    res+=1
                    turn_to_dust(i,j)
        return res

```

```cpp title="C++"
class Solution {
public:

    void turn_to_dust(vector<vector<char>>& grid, int i, int j, int m, int n){
        if (i<0 || j<0 || i==m || j==n || grid[i][j]=='0') return;
        grid[i][j]='0';
        turn_to_dust(grid,i+1,j,m,n);
        turn_to_dust(grid,i,j+1,m,n);
        turn_to_dust(grid,i-1,j,m,n);
        turn_to_dust(grid,i,j-1,m,n);
        return;
    }

    int numIslands(vector<vector<char>>& grid) {
        int m = grid.size();
        int n = grid[0].size();
        int res=0;
        for (int i=0; i<m; i++){
            for (int j=0; j<n; j++){
                if (grid[i][j]=='1'){
                    res++;
                    turn_to_dust(grid,i,j,m,n);
                }
            }
        }
        return res;
    }
};

```
