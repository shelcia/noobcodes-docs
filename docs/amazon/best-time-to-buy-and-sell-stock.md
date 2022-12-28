---
sidebar_position: 34
tags: [amazon]
---

# Best Time to Buy and Sell Stock

### Problem Statement

You are given an array prices where prices[i] is the price of a given stock on the i<sup>th</sup> day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

[Leetcode Link](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

#### Example 1:

```
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
```

#### Example 2:

```
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
```

#### Constraints:

- 1 <= prices.length <= 3 \* 10<sup>5</sup>
- 0 <= prices[i] <= 3 \* 10<sup>4</sup>

### Code

```python title="Python Code"

class Solution:
    def maxProfit(self,prices):
        left = 0
        right = 1
        max_profit = 0
        while right < len(prices):
            currentProfit = prices[right] - prices[left]
            if prices[left] < prices[right]:
                max_profit =max(currentProfit,max_profit)
            else:
                left = right
            right += 1
        return max_profit

```
