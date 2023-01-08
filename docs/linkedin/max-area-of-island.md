---
sidebar_position: 47
tags: [linkedin]
---

# Max Area of Island

### Problem Statement

You are given an `m x n` binary matrix `grid`. An island is a group of 1's (representing land) connected **4-directionally** (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

The **area** of an island is the number of cells with a value 1 in the island.

Return the maximum **area** of an island in grid. If there is no island, return 0.

[Leetcode Link](https://leetcode.com/problems/max-area-of-island/)

#### Example 1:

![alt text](https://assets.leetcode.com/uploads/2021/05/01/maxarea1-grid.jpg)

```
Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.
```

#### Example 2:

```
Input: grid = [[0,0,0,0,0,0,0,0]]
Output: 0
```

#### Constraints:

- m == grid.length
- n == grid[i].length
- 1 <= m, n <= 50
- grid[i][j] is either 0 or 1.

### Code

```python title="Python"

class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        #best case
        if not grid:
            return 0

        #initialize values
        rows, cols = len(grid), len(grid[0])
        visited = set()
        curArea = 0
        maxArea = 0

        #define bfs and return current island's area
        def bfs(r,c):
            queue = collections.deque()
            area = 1
            queue.append((r,c))
            visited.add((r,c))
            while queue:
                row, col = queue.popleft()
                directions = [
                    [1,0],     #right
                    [-1,0],    #left
                    [0,1],     #up
                    [0,-1]     #down
                ]
                #check all 4 directions
                for dr, dc in directions:
                    r,c = row+dr,col+dc
                    if (
                        r in range(rows) and
                        c in range(cols) and
                        grid[r][c] == 1 and
                        (r,c) not in visited
                    ):
                        visited.add((r,c))
                        queue.append((r,c))
                        area += 1
            return area


        #main logic
        #traverse the grid and check for any non-visited land. If found, perform bfs to find the island's area.
        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == 1 and (r,c) not in visited:
                    curArea = bfs(r,c)
                    maxArea = max(maxArea, curArea)

        return maxArea
```
