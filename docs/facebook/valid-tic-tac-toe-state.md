---
sidebar_position: 225
tags: [facebook]
---

# Valid Tic-Tac-Toe State

### Problem Statement

Given a Tic-Tac-Toe board as a string array board, return true if and only if it is possible to reach this board position during the course of a valid tic-tac-toe game.

The board is a 3 x 3 array that consists of characters ' ', 'X', and 'O'. The ' ' character represents an empty square.

Here are the rules of Tic-Tac-Toe:

- Players take turns placing characters into empty squares ' '.
- The first player always places 'X' characters, while the second player always places 'O' characters.
- 'X' and 'O' characters are always placed into empty squares, never filled ones.
- The game ends when there are three of the same (non-empty) character filling any row, column, or diagonal.
- The game also ends if all squares are non-empty.
- No more moves can be played if the game is over.

[Leetcode Link](https://leetcode.com/problems/valid-tic-tac-toe-state)

### Examples:

```
Example 1:

Input: board = ["O  ","   ","   "]
Output: false
Explanation: The first player always plays "X".

Example 2:

Input: board = ["XOX"," X ","   "]
Output: false
Explanation: Players take turns making moves.

Example 3:

Input: board = ["XOX","O O","XOX"]
Output: true
```

### Constraints:

- board.length == 3
- board[i].length == 3
- board[i][j] is either 'X', 'O', or ' '.

### Code

```python title="Python Code"
class Solution(object):
    def check_win_positions(self, board, player):
	"""
	Check if the given player has a win position.
	Return True if there is a win position. Else return False.
	"""
        #Check the rows
        for i in range(len(board)):
            if board[i][0] == board[i][1] == board[i][2] == player:
                return True

        #Check the columns
        for i in range(len(board)):
            if board[0][i] == board[1][i] == board[2][i] == player:
                return True

        #Check the diagonals
        if board[0][0] == board[1][1] == board[2][2]  == player or \
               board[0][2] == board[1][1] == board[2][0] == player:
            return True

        return False

    def validTicTacToe(self, board):
        """
        :type board: List[str]
        :rtype: bool
        """

        x_count, o_count = 0, 0
        for i in range(len(board)):
            for j in range(len(board[0])):
                if board[i][j] == "X":
                    x_count += 1
                elif  board[i][j] == "O":
                    o_count += 1

        if o_count > x_count or x_count-o_count>1:
            return False

        if self.check_win_positions(board, 'O'):
            if self.check_win_positions(board, 'X'):
                return False
            return o_count == x_count

        if self.check_win_positions(board, 'X') and x_count!=o_count+1:
            return False

        return True
```
