---
sidebar_position: 36
tags: [amazon]
---

# Best Time to Buy and Sell Stock III

### Problem Statement

You are given an array prices where `prices[i]` is the price of a given stock on the ith day.

Find the maximum profit you can achieve. You may complete at most two transactions.

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
Find and return the maximum profit you can achieve.

[Leetcode Link](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/)

#### Example 1:

```
Input: prices = [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
```

#### Example 2:

```
Input: prices = [1,2,3,4,5]

Output: 4
```

##### Explanation:

- Buy on day 1 (`price = 1`) and sell on day 5 (`price = 5`), `profit = 5-1 = 4`.
- **Note** that you cannot buy on day 1, buy on **day 2** and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.

#### Example 3:

```
Input: prices = [7,6,4,3,1]

Output: 0
```

##### Explanation:

In this case, no transaction is done, i.e. `max profit = 0`.

#### Constraints:

- `1` `<=` `prices.length` `<=` 10<sup>5</sup>
- `0` `<=` `prices[i]` `<=` 10<sup>5</sup>

### Code

```python title="Python Code"

class Solution:
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        if not prices or len(prices) < 2: return 0

        profit_l = [0] # left to right
        profit_r = [0] # right to left
        min_value = prices[0]
        max_value = prices[len(prices) - 1]

        for i in range(1, len(prices)):
            price = prices[i]
            profit_l.append(max(profit_l[i - 1], price - min_value))
            min_value = min(min_value, price)

        for i in range(1, len(prices)):
            price = prices[len(prices) - 1 - i]
            profit_r.append(max(profit_r[i - 1], max_value - price))
            max_value = max(max_value, price)

        result = [l + r for l, r in zip(profit_l, reversed(profit_r))]
        return max(result)

```
