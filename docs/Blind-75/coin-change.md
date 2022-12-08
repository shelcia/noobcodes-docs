---
sidebar_position: 2
tags: [blind-75, array, dynamic programming, breadth-first search]
---

# Coin Change

### Problem Statement

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

### Examples

```
Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Example 2:

Input: coins = [2], amount = 3
Output: -1

Example 3:

Input: coins = [1], amount = 0
Output: 0
```

### Constraints

```
1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104
```

### Code

```jsx title="Python3 Code"

from collections import deque

class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:

        queue = deque()
        numCoins = 0
        seen = set()
        coins.sort(reverse=True)
        queue.append(amount)

        if amount == 0:
            return 0

        while queue:
            qlen = len(queue)
            numCoins += 1
            for i in range(qlen):
                x = queue.popleft()
                for coin in coins:
                    if x - coin == 0:
                        return numCoins
                    elif x - coin > 0:
                        if x-coin not in seen:
                            queue.append(x-coin)
                            seen.add(x-coin)
        return -1


```
