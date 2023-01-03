---
sidebar_position: 142
tags: [facebook]
---

# Shortest Bridge

### Problem Statement

You are given an n x n binary matrix grid where 1 represents land and 0 represents water.

An island is a 4-directionally connected group of 1's not connected to any other 1's. There are exactly two islands in grid.

You may change 0's to 1's to connect the two islands to form one island.

Return the smallest number of 0's you must flip to connect the two islands.

[Leetcode Link](https://leetcode.com/problems/shortest-bridge)

#### Example 1:

```
Input: grid = [[0,1],[1,0]]
Output: 1
```

#### Example 2:

```
Input: grid = [[0,1,0],[0,0,0],[0,0,1]]
Output: 2
```

#### Example 3:

```
Input: grid = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
Output: 1
```

#### Constraints:

- n == grid.length == grid[i].length
- 2 <= n <= 100
- grid[i][j] is either 0 or 1.
- There are exactly two islands in grid.

### Code

```python title="Python"
class Solution:
    def dfs(self,x,y,m,n,grid,visited,lst):
        visited[x][y]=1
        lst.append([x,y,0])
        row=[-1,1,0,0]
        col=[0,0,-1,1]
        for i in range(4):
            if x+row[i]>=0 and x+row[i]<m and y+col[i]>=0 and y+col[i]<n and visited[x+row[i]][y+col[i]]==-1 and grid[x+row[i]][y+col[i]]==1:
                self.dfs(x+row[i],y+col[i],m,n,grid,visited,lst)

    def shortestBridge(self, grid: List[List[int]]) -> int:
        m=len(grid)
        n=len(grid[0])
        visited=[[-1]*n for i in range(m)]
        lst=[]
        for i in range(m):
            for j in range(n):
                if visited[i][j]==-1 and grid[i][j]==1:
                    self.dfs(i,j,m,n,grid,visited,lst)
                    break
            else:
                continue
            break
        mn=float("infinity")
        while lst:
            x,y,d=lst.pop(0)
            row=[-1,1,0,0]
            col=[0,0,-1,1]
            for i in range(4):
                if x+row[i]>=0 and x+row[i]<m and y+col[i]>=0 and y+col[i]<n and visited[x+row[i]][y+col[i]]==-1:
                    if grid[x+row[i]][y+col[i]]==1:
                        mn=min(mn,d)
                    else:
                        lst.append([x+row[i],y+col[i],d+1])
                        visited[x+row[i]][y+col[i]]=1
        return mn
```
