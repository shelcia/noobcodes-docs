---
sidebar_position: 4
tags: [blind-75]
---

# Decode Ways

### Coin Change

You are given an integer array `coins` representing coins of different denominations and an integer amount representing a total `amount` of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return `-1`.

You may assume that you have an infinite number of each kind of coin.

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
#### Example 3:

```
Input: coins = [1], amount = 0
Output: 0
```

#### Constraints:

* 1 <= coins.length <= 12
* 1 <= coins[i] <= 2<sup>31</sup> - 1
* 0 <= amount <= 10<sup>4</sup> 

### Code

```jsx title="Python Code"
class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        new_coins = sorted(coins)
        dp = [amount for _ in range(amount+1)]
        dp[0] = 0
        #dp[11]=5 means 5 coins will get 11 
        for each_amo in range(1,amount+1):
            for coin in new_coins:
                if coin <= each_amo:
                    dp[each_amo] = min(dp[each_amo], 1+dp[each_amo-coin])
                else:
                    break
        return dp[amount] if dp[amount]<=amount else -1
```