---
sidebar_position: 101
tags: [amazon]
---

# Coin Change

### Problem Statement

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

[LeetCode link](https://leetcode.com/problems/coin-change)

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

### Constraints:

- 1 <= coins.length <= 12
- 1 <= coins[i] <= 2<sup>31</sup> - 1
- 0 <= amount <= 10<sup>4</sup>

### Code

```jsx title="Python Code"

class Solution(object):
    def coinChange(self, coins, amount):
        """
        :type coins: List[int]
        :type amount: int
        :rtype: int
        """
        if amount == 0:
            return 0
        value1 = [0]
        value2 = []
        nc =  0
        visited = [False]*(amount+1)
        visited[0] = True
        while value1:
            nc += 1
            for v in value1:
                for coin in coins:
                    newval = v + coin
                    if newval == amount:
                        return nc
                    elif newval > amount:
                        continue
                    elif not visited[newval]:
                        visited[newval] = True
                        value2.append(newval)
            value1, value2 = value2, []
        return -1
```
