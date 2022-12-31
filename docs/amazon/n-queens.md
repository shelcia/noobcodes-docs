---
sidebar_position: 78
tags: [amazon]
---

# N Queens

### Problem Statement

The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

[Leetcode link](https://leetcode.com/problems/n-queens/)

#### Example 1:

![Solution 1](https://assets.leetcode.com/uploads/2020/11/13/queens.jpg)

```
Input: n = 4
Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
```

#### Example 2:

```
Input: n = 1
Output: [["Q"]]
```

#### Constraints:

- 1 <= n <=9

### Code

```python title="Python Code"
class Solution(object):
    def solveNQueens(self, n):
        """
        :type n: int
        :rtype: List[List[str]]
        """
        res = [] # result
        row = [] # row[i] = k,  Q of i-th row should be placed in the k-th column, store the correct column position Q
        col = [False] * n # column visited
        dia1 = [False] * (2 * n - 1) # diangle1, /
        dia2 = [False] * (2 * n - 1) # \
        self.putQueen(n, 0, row, res, col, dia1, dia2)
        return res

    def putQueen(self, n, index, row, res, col, dia1, dia2):
        if index == n:
            res.append(self.generateBoard(n, row))
            return
        for i in range(n):
            # index row , i cloumn
            if not col[i] and not dia1[index+i] and not dia2[index-i+(n-1)]:
                row.append(i)
                col[i] = True
                dia1[index+i] = True
                dia2[index - i + (n - 1)] = True
                self.putQueen(n, index+1, row, res, col, dia1, dia2)
                col[i] = False
                dia1[index + i] = False
                dia2[index - i + (n - 1)] = False
                row.pop()
        return

    def generateBoard(self, n, row):
        if len(row) != n:
            return False
        board = [["."] * n for _ in range(n)]
        for i in range(n):
            board[i][row[i]] = "Q"
            board[i] = "".join(board[i])
        return board

```
