---
sidebar_position: 100
tags: [amazon]
---

# Cherry Pickup

### Problem Statement

You are given an n x n grid representing a field of cherries, each cell is one of three possible integers.

- 0 means the cell is empty, so you can pass through,
- 1 means the cell contains a cherry that you can pick up and pass through, or
- -1 means the cell contains a thorn that blocks your way.

Return the maximum number of cherries you can collect by following the rules below:

- Starting at the position (0, 0) and reaching (n - 1, n - 1) by moving right or down through valid path cells (cells with value 0 or 1).
- After reaching (n - 1, n - 1), returning to (0, 0) by moving left or up through valid path cells.
- When passing through a path cell containing a cherry, you pick it up, and the cell becomes an empty cell 0.
- If there is no valid path between (0, 0) and (n - 1, n - 1), then no cherries can be collected.

[LeetCode link](https://leetcode.com/problems/cherry-pickup)

#### Example 1:

```
Input: grid = [[0,1,-1],[1,0,-1],[1,1,1]]
Output: 5
Explanation: The player started at (0, 0) and went down, down, right right to reach (2, 2).
4 cherries were picked up during this single trip, and the matrix becomes [[0,1,-1],[0,0,-1],[0,0,0]].
Then, the player went left, up, up, left to return home, picking up one more cherry.
The total number of cherries picked up is 5, and this is the maximum possible.
```

#### Example 2:

```
Input: grid = [[1,1,-1],[1,-1,1],[-1,1,1]]
Output: 0
```

### Constraints:

- n == grid.length
- n == grid[i].length
- 1 <= n <= 50
- grid[i][j] is -1, 0, or 1.
- grid[0][0] != -1
- grid[n - 1][n - 1] != -1

### Code

```jsx title="Python Code"

class Solution(object):
    def cherryPickup(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        dp = {}
        res =  self.findMaxCherries(0,0,0,0,dp, grid)
        return 0 if res == float('-inf') else res

    def findMaxCherries(self, i1, j1, i2, j2, dp, grid):
        if (i1, j1, i2, j2) in dp:
            return dp[(i1, j1, i2, j2)]
        n = len(grid)
        if i1 == n-1 and j1 == n-1 and i2 == n-1 and j2 == n-1:
            return grid[-1][-1]
        if i1 >= n or i2 >= n or j1 >= n or j2 >= n:
            return float('-inf')
        if grid[i1][j1] == -1 or grid[i2][j2] == -1:
            return float('-inf')
        best = max(
            self.findMaxCherries(i1+1, j1, i2+1, j2,dp,grid),
            self.findMaxCherries(i1+1, j1, i2, j2+1,dp,grid),
            self.findMaxCherries(i1, j1+1, i2+1, j2,dp,grid),
            self.findMaxCherries(i1, j1+1, i2, j2+1,dp,grid)
        )
        best += grid[i1][j1] if (i1,j1) == (i2, j2) else grid[i1][j1] + grid[i2][j2]
        dp[((i1, j1, i2, j2))] = best
        return best
```
