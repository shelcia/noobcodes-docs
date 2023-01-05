---
sidebar_position: 810
tags: [Goldman Sachs]
---

#  Coin Change

### Problem Statement

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins,` return -1`.

You may assume that you have an `infinite` number of each kind of coin.




[Leetcode Link](https://leetcode.com/problems/coin-change/)

#### Example 1:

```

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
```

#### Example 2:
```
Input: coins = [2], amount = 3
Output: -1
```

#### Constraints:
```
1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104
```

### Code

```java title="java Code"


class Solution {
    public int coinChange(int[] coins, int amount) {
        int dp[] = new int[amount+1];
        for(int i=1;i<=amount;i++){
            int min = Integer.MAX_VALUE;
            for(int coin:coins){
               if(i-coin>=0 && dp[i-coin] != -1)
                   min = dp[i-coin] < min ? dp[i-coin] :min; 
            }
            // Set dp[i] to -1 if i (current amount) can not be reach by  coins array
            dp[i] = min== Integer.MAX_VALUE ? -1 : 1+min;
        }
        return dp[amount];
    }
}
```

