---
sidebar_position: 1
tags: [microsoft]
---

# The Maze

### Problem Statement

There is a ball in a maze with empty spaces and walls. The ball can go through empty spaces by rolling up, down, left or right, but it won't stop rolling until hitting a wall. When the ball stops, it could choose the next direction.

Given the ball's start position, the destination and the maze, determine whether the ball could stop at the destination.

The maze is represented by a binary 2D array. 1 means the wall and 0 means the empty space. You may assume that the borders of the maze are all walls. The start and destination coordinates are represented by row and column indexes.

#### Example 1:

```
Input:
map =
[
 [0,0,1,0,0],
 [0,0,0,0,0],
 [0,0,0,1,0],
 [1,1,0,1,1],
 [0,0,0,0,0]
]
start = [0,4]
end = [3,2]
```

```
Output:
false
```

#### Example 2:

```
Input:
map =
[[0,0,1,0,0],
 [0,0,0,0,0],
 [0,0,0,1,0],
 [1,1,0,1,1],
 [0,0,0,0,0]
]
start = [0,4]
end = [4,4]
```

```
Output:
true
```

### Code

```python title="Python Code"
from typing import (
    List,
)

class Solution:
    """
    @param maze: the maze
    @param start: the start
    @param destination: the destination
    @return: whether the ball could stop at the destination
    """
    def has_path(self, maze: List[List[int]], start: List[int], destination: List[int]) -> bool:
        # write your code here
        m, n, visited = len(maze), len(maze [0]), set()
        def dfs(x, y):
            if (x, y) not in visited:
                visited.add((x, y))
            else:
                return False
            if [x, y]==destination:
                return True
            for i, j in (0,-1), (0,1), (-1,0), (1,0):
                new_X , new_Y = x, y
                while 0 <= new_X + i <m and 0 <= new_Y+ j < n and maze [new_X + i][new_Y + j] !=1 :
                    new_X += i
                    new_Y += j
                if dfs(new_X, new_Y):
                    return True
            return False
        return (dfs(*start))
```
