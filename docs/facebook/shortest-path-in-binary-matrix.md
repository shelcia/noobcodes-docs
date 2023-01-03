---
sidebar_position: 143
tags: [facebook]
---

# Shortest Path in Binary Matrix

### Problem Statement

Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.

A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:

- All the visited cells of the path are 0.
- All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).

The length of a clear path is the number of visited cells of this path.

[Leetcode Link](https://leetcode.com/problems/shortest-path-in-binary-matrix)

#### Example 1:

```
Input: grid = [[0,1],[1,0]]
Output: 2
```

#### Example 2:

```
Input: grid = [[0,0,0],[1,1,0],[1,1,0]]
Output: 4
```

#### Example 3:

```
Input: grid = [[1,0,0],[1,1,0],[1,1,0]]
Output: -1
```

#### Constraints:

- n == grid.length
- n == grid[i].length
- 1 <= n <= 100
- grid[i][j] is 0 or 1

### Code

```python title="Python"
class Solution:
    def shortestPathBinaryMatrix(self, grid):
        N = len(grid)
        neibs = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]
        queue = deque([(1, 0, 0)]) if grid[0][0] == 0 else deque()
        visited = set()

        while queue:
            dist, x, y = queue.popleft()
            if (x, y) == (N-1, N-1): return dist
            for dx, dy in neibs:
                if 0<=x+dx<N and 0<=y+dy<N and grid[x+dx][y+dy] == 0 and (x+dx, y+dy) not in visited:
                    visited.add((x+dx,y+dy))
                    queue.append((dist + 1, x+dx, y+dy))

        return -1
```
