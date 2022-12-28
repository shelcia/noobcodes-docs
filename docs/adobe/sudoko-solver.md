---
sidebar_position: 19
tags: [adobe]
---

# Sudoku Solver

### Problem Statement

Write a program to solve a Sudoku puzzle by filling the empty cells.

_A sudoku solution must satisfy all of the following rules:_

- Each of the digits `1-9` must occur exactly once in each row.
- Each of the digits `1-9` must occur exactly once in each column.
- Each of the digits `1-9` must occur exactly once in each of the 9 `3x3` sub-boxes of the grid.
- The `'.'` character indicates empty cells.

[Leetcode Link](https://leetcode.com/problems/sudoku-solver/)

#### Example 1:

```
Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]

Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
```

#### Constraints:

- `board.length == 9`
- `board[i].length == 9`
- `board[i][j]` is a digit or `'.'`.
- It is **guaranteed** that the input board has only **one** solution.

### Code

```python title="Python Code"

class Solution:
    def solveSudoku(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        assert(self.backtrack(board, 0, 0))
        return

    def backtrack(self, board: List[List[str]], r: int, c: int) -> bool:
        # Go to next empty space
        while board[r][c] != '.':
            c += 1
            if c == 9: c, r = 0, r+1
            if r == 9: return True
        # Try all options, backtracking if not work
        for k in range(1, 10):
            if self.isValidSudokuMove(board, r, c, str(k)):
                board[r][c] = str(k)
                if self.backtrack(board, r, c):
                    return True
        board[r][c] = '.'
        return False

    def isValidSudokuMove(self, board: List[List[str]], r: int, c: int, cand: int) -> bool:
        # Check row
        if any(board[r][j] == cand for j in range(9)): return False
        # Check col
        if any(board[i][c] == cand for i in range(9)): return False
        # Check block
        br, bc = 3*(r//3), 3*(c//3)
        if any(board[i][j] == cand for i in range(br, br+3) for j in range(bc, bc+3)): return False
        return True
```
