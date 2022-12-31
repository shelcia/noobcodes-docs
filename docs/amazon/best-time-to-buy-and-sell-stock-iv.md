---
sidebar_position: 37
tags: [amazon]
---

# Best Time to Buy and Sell Stock IV

### Problem Statement

You are given an integer array prices where `prices[i]` is the price of a given stock on the ith day, and an integer k.

Find the maximum profit you can achieve. You may complete at most k transactions.

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

[Leetcode Link](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/)

#### Example 1:

```
Input: k = 2, prices = [2,4,1]
Output: 2
Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.
```

#### Example 2:

```
Input: k = 2, prices = [3,2,6,5,0,3]
Output: 7
Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4. Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
```

#### Constraints:

- `1 <= k <= 100`
- `1 <= prices.length <= 1000`
- `0 <= prices[i] <= 1000`

### Code

```python title="Python Code"

class Solution:
    def maxProfit(self, prices):def maxProfit(self, k, prices):
        if k <= 0 or len(prices) < 2: return 0
        max_profit, length = 0, len(prices)
        if k >= length//2:
            for i in xrange(1,length):
                max_profit += max(prices[i]-prices[i-1],0)
            return max_profit

        release = [0]*k
        hold = [float('-inf')]*k
        for i in prices:
            for j in range(k-1, 0, -1):
                release[j] = max(release[j], hold[j] + i)
                hold[j] = max(hold[j], release[j-1] - i)
            release[0] = max(release[0], hold[0] + i)
            hold[0] = max(hold[0], -i)
        return release[-1]

```
