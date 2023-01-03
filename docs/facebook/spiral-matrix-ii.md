---
sidebar_position: 164
tags: [facebook, array, matrix]
---

# Spiral Matrix II

### Problem Statement

Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

[Leetcode link](https://leetcode.com/problems/spiral-matrix-ii)

### Examples

```
Example 1:

Input: n = 3
Output: [[1,2,3],[8,9,4],[7,6,5]]

Example 2:

Input: n = 1
Output: [[1]]
```

### Constraints

```
1 <= n <= 20
```

### Code

```python title="Python3 Code"


class Solution:
    def generateMatrix(self, n: int) -> List[List[int]]:
        stack = [(0,1),(1,0),(0,-1),(-1,0)]
        m = [[0 for _ in range(n)] for x in range(n)]
        num = 2
        total = n*n
        i=j=0
        side_step = 1
        side_len = n
        turn = 1
        m[0][0]=1
        while num <= total:
            if side_step == side_len:
                side_step=0
                stack.append(stack.pop(0))
                turn+=1
                if turn == 2:
                    side_len-=1
                    turn = 0
            i=i+stack[0][0]
            j=j+stack[0][1]
            m[i][j] = num
            num+=1
            side_step +=1

        return m
```
