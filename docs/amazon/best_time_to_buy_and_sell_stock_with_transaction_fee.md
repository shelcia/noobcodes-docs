---
sidebar_position: 37
tags: [amazon]
---

# Best Time to Buy and Sell Stock with Transaction Fee

### Problem Statement

You are given an array prices where prices[i] is the price of a given stock on the ith day, and an integer fee representing a transaction fee.

Find the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

[Leetcode Link](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)

#### Example 1:

```
Input: prices = [1,3,2,8,4,9], fee = 2
Output: 8
Explanation: The maximum profit can be achieved by:
- Buying at prices[0] = 1
- Selling at prices[3] = 8
- Buying at prices[4] = 4
- Selling at prices[5] = 9
The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8.
```

#### Example 2:

```
Input: prices = [1,3,7,5,10,3], fee = 3
Output: 6
```

#### Constraints:

- 1 <= prices.length <= 5 \* 10<sup>4</sup>
- 1 <= prices[i] < 5 \* 10<sup>4</sup>
- 0 <= fee < 5 \* 10<sup>4</sup>

### Code

```python title="Python Code"

class Solution:
        def maxProfit(self, prices, fee):
            s0 = -prices[0]
            s1 = 0

            for price in prices:
                # could hold given s0, or buy given s1
                f0 = max(s0, s1 - price)
                # hold or sell given s0
                f1 = max(s1, s0 + price - fee)

                s0, s1 = f0, f1

            return s1

```
