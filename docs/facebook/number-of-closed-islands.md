---
sidebar_position: 53
tags: [facebook]
---

# Number of Closed Islands

### Problem Statement

Given a 2D grid consists of 0s (land) and 1s (water). An island is a maximal 4-directionally connected group of 0s and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s.

Return the number of closed islands.

[Leetcode Link](https://leetcode.com/problems/number-of-closed-islands)

#### Example 1:

```
Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
Output: 2
Explanation:
Islands in gray are closed because they are completely surrounded by water (group of 1s).
```

#### Example 2:

```
Input: grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
Output: 1
```

#### Example 3:

```
Input: grid = [[1,1,1,1,1,1,1],
               [1,0,0,0,0,0,1],
               [1,0,1,1,1,0,1],
               [1,0,1,0,1,0,1],
               [1,0,1,1,1,0,1],
               [1,0,0,0,0,0,1],
               [1,1,1,1,1,1,1]]
Output: 2
```

#### Constraints:

- 1 <= grid.length, grid[0].length <= 100
- 0 <= grid[i][j] <=1

### Code

```python title="Python Code"
class Solution:
    def closedIsland(self, grid: List[List[int]]) -> int:
        m = len(grid)
        if m <= 0:
            return 0
        n = len(grid[0])

        seen = [[0]*n for _ in range(m)]

        def dfs(i, j, color):
            dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
            grid[i][j] = color
            seen[i][j] = 1
            for d in dirs:
                x, y = i + d[0], j + d[1]
                if x < 0 or x >= m or y < 0 or y >= n:
                    continue
                if grid[x][y] == 0 and not seen[x][y]:
                    dfs(x, y, color)

        color = 0
        ans = 0
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 0 and i != 0 and j != 0 and i != m-1 and j != n-1 and not seen[i][j]:
                    color -= 1
                    dfs(i, j, color)
        # print(grid)
        # print(color)
        s = set()
        for i in range(m):
            if grid[i][0] != 0 and grid[i][0] != 1:
                s.add(grid[i][0])
            if grid[i][n-1] != 0 and grid[i][n-1] != 1:
                s.add(grid[i][n-1])
        for j in range(n):
            if grid[0][j] != 0 and grid[0][j] != 1:
                s.add(grid[0][j])
            if grid[m-1][j] != 0 and grid[m-1][j] != 1:
                s.add(grid[m-1][j])
        # print(s)
        return -color - len(s)
```
