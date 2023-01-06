---
sidebar_position: 64
tags: [LinkedIn]
---

# Profitable Schemes

### Problem Statement

There is a group of `n` members, and a list of various crimes they could commit. The i<sup>th</sup> crime generates a `profit[i]` and requires `group[i]` members to participate in it. If a member participates in one crime, that member can't participate in another crime.

Let's call a **profitable scheme** any subset of these crimes that generates at least `minProfit` profit, and the total number of members participating in that subset of crimes is at most n.

Return the number of schemes that can be chosen. Since the answer may be very large, **return it modulo** 10<sup>9</sup> + 7.

[Leetcode Link](https://leetcode.com/problems/profitable-schemes/)

### Code

```jsx title="Python"
    def profitableSchemes(self, G, P, group, profit):
        dp = [[0] * (G + 1) for i in range(P + 1)]
        dp[0][0] = 1
        for p, g in zip(profit, group):
            for i in range(P, -1, -1):
                for j in range(G - g, -1, -1):
                    dp[min(i + p, P)][j + g] += dp[i][j]
        return sum(dp[P]) % (10**9 + 7)
```
