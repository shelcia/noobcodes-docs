---
sidebar_position: 3
tags: [microsoft]
---

# Design Tic-Tac-Toe

### Problem Statement

Design `Tic-Tac-Toe` game.

- board has fixed size of `3`
- `X` always take the first move
- If a place already got taken, and one player want to take that place,

an AlreadyTakenException will be thrown

- If one player wins, and somebody try to make another move, a GameEndException will be thrown.
- If all the places got taken,you should print "it's a draw"
- If the winner shows up, return True
- If tie or if there is no winner yet, return False

#### Example 1:

```
Input:
move(0, 0) // X turn
move(1, 0) // O trun
move(1, 1) // X turn
move(2, 0) // O turn
move(2, 2) // X turn and win
move(0, 0)  //throw GameEndException
move(0, 0) // X turn
move(0, 0) // throw AlreadyTakenException
move(1, 0) // O turn
move(1, 1) // X turn
move(2, 0) // o turn
move(2, 2) // X turn and win
Output:
x player wins!
x player wins!
```

### Code

```jsx title="Python Code"
public class TicTacToe {

    public TicTacToe(int n) {
        count = new int[6*n][3];
    }

    public int move(int row, int col, int player) {
        int n = count.length / 6;
        for (int x : new int[]{row, n+col, 2*n+row+col, 5*n+row-col})
            if (++count[x][player] == n)
                return player;
        return 0;
    }

    int[][] count;
}
```
