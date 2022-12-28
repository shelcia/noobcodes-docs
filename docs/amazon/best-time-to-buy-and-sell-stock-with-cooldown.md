---
sidebar_position: 38
tags: [amazon, stocks]
---

# Best Time to Buy and Sell Stock with Cooldown

### Problem Statement

You are given an array prices where `prices[i]` is the price of a given stock on the ith day.

Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:

After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

[Leetcode Link](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)

#### Example 1:

```
Input: prices = [1,2,3,0,2]
Output: 3
```

##### Explanation:

`transactions = [buy, sell, cooldown, buy, sell]`

#### Example 2:

```
Input: prices = [1]
Output: 0
```

#### Constraints:

- `1 <= prices.length <= 5000`
- `0 <= prices[i] <= 1000`

### Code

```python title="Python Code"

class Solution:
        def maxProfit(self, prices):
            if len(prices) < 2: return 0
            prev_sell, sell, buy = 0, 0, -prices[0] # buy initialized to buying a stock at i=0
            for i in range(1, len(prices)):
                prev_sell, sell, buy = sell, max(buy+prices[i], sell), max(prev_sell-prices[i], buy)
            return max(sell, buy)

```
