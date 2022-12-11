---
sidebar_position: 19
tags: [microsoft]
---

# Game of Life

### Problem Statement

According to [Wikipedia's article](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life): "The **Game of Life**, also known simply as **Life**, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

The board is made up of an `m x n` grid of cells, where each cell has an initial state: **live** (represented by a `1`) or **dead** (represented by a `0`). Each cell interacts with its [eight neighbors](https://en.wikipedia.org/wiki/Moore_neighborhood) (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

1. Any live cell with fewer than two live neighbors dies as if caused by under-population.
2. Any live cell with two or three live neighbors lives on to the next generation.
3. Any live cell with more than three live neighbors dies, as if by over-population.
4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the `m x n` grid `board`, return *the next state*.

#### Example 1:
![alt text](https://assets.leetcode.com/uploads/2020/12/26/grid1.jpg)
```
Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
```

#### Example 2:
![alt text](https://assets.leetcode.com/uploads/2020/12/26/grid2.jpg)
```
Input: board = [[1,1],[1,0]]
Output: [[1,1],[1,1]]
```

#### Constraints:
- m == board.length
- n == board[i].length
- 1 <= m, n <= 25
- board[i][j] is 0 or 1.

#### Follow up:
- Could you solve it in-place? Remember that the board needs to be updated simultaneously: You cannot update some cells first and then use their updated values to update other cells.
- In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches upon the border of the array (i.e., live cells reach the border). How would you address these problems?

### Code

```jsx title="Python"
class Solution:
    def gameOfLife(self, b: List[List[int]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        
        apply by using:
            under-population: < 2
            live to next generation: 2 or 3 
            over-population: > 3
            reproduction: == 3
        
        simultaneously: shoud not use DFS/BFS
            
        \|/
        - -
        /|\
        """
        # all new 0's denotes as -1, (1 ==> 0)
        # all new 1's denotes as 2   (0 ==> 1)
        m, n = len(b), len(b[0])
        dirs = [[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1]]
        for i in range(m):
            for j in range(n):
                livecount = 0
                for r, c in dirs:
                    nr, nc = i + r, j + c
                    if 0 <= nr < m and 0 <= nc < n and abs(b[nr][nc]) == 1: # originally 1's
                        livecount += 1
                if b[i][j] == 1:
                    if livecount < 2 or livecount > 3:   
                        b[i][j] = -1
                else:
                    if livecount == 3:  
                        b[i][j] = 2
        
        for i in range(m):
            for j in range(n):
                if b[i][j] == 2:    b[i][j] = 1
                elif b[i][j] == -1: b[i][j] = 0
```


```jsx title="C++"
class Solution {
public:
    void gameOfLife(vector<vector<int>>& board) {
        int n = board.size(), m = board[0].size(); // Size of board
        int dx[] = {-1,-1,-1,0,0,1,1,1}; 
        int dy[] = {-1,0,1,-1,1,-1,0,1}; /*Direction vectors to visit  8 neighbours */
        for(int i = 0; i < n ; i++){
            for(int j = 0; j < m ; j++){ // For each cell of the board
                int countLive = 0; // Count how many live neighbours it has
                for(int k = 0; k < 8 ; k++){ // visit its 8 neighbours
                    int destx = i + dx[k];
                    int desty = j + dy[k]; // current neighbour is destx and desty
                    if(destx < 0 || desty < 0 || destx >= n || desty >= m) continue; // neighbour should be within boundary of the board
                    if(board[destx][desty] == 1 || board[destx][desty] == 2) countLive++; // 1 or 2 means it was alive in previous state
                } 
                if((countLive < 2 || countLive > 3) && board[i][j] == 1) board[i][j] = 2; //conditions for a live cell to die
                if(board[i][j] == 0 && countLive == 3) board[i][j] = 3; // conditions for a dead cell to come alive
            }
        }
        for(int i = 0 ; i < n;  i++){
            for(int j = 0; j < m; j++){
                if(board[i][j] == 2) board[i][j] = 0;
                if(board[i][j] == 3) board[i][j] = 1;
                // mark each newly alive and dead cell as 0 and 1.
            }
        }
    }
};
```