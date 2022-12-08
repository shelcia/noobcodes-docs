---
sidebar_position: 1
tags: [microsoft]
---

# Battleships in a Board

### Problem Statement

Given an `m x n` matrix `board` where each cell is a battleship `'X'` or empty `'.'`, return the number of the battleships on `board`.

Battleships can only be placed horizontally or vertically on `board`. In other words, they can only be made of the shape `1 x k` (`1` row, `k` columns) or `k x 1` (`k` rows, `1` column), where k can be of any size. At least one horizontal or vertical cell separates between two battleships (i.e., there are no adjacent battleships).

#### Example 1:

![alt text](https://assets.leetcode.com/uploads/2021/04/10/battelship-grid.jpg)

```
Input: board = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]
Output: 2
```

#### Example 2:

```
Input: board = [["."]]
Output: 0
```

#### Constraints:

- `m == board.length`
- `n == board[i].length`
- `1 <= m, n <= 200`
- `board[i][j]` is either `'.'` or `'X'`.

### Code

```jsx title="Python Code"
class Solution:
    def countBattleships(self, board: List[List[str]]) -> int:
        m = len(board)
        n = len(board[0])

        res = 0
        for i in range(m):
            for j in range(n):
                if i == 0 and j == 0 and board[i][j] == 'X':
                    res += 1
                elif i ==0 and board[i][j] == 'X' and board[i][j-1] == '.':

                    res += 1
                elif j ==0 and board[i][j] == 'X' and board[i-1][j] == '.':
                    res += 1
                elif board[i][j] == 'X':
                    if board[i-1][j] == '.' and board[i][j-1] == '.':
                        res += 1
        return res
```
