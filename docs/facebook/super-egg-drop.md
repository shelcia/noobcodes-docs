---
sidebar_position: 184
tags: [facebook]
---

# Super Egg Drop

### Problem Statement

You are given k identical eggs and you have access to a building with `n` floors labeled from `1` to `n`.

You know that there exists a floor `f` where `0 <= f <= n` such that any egg dropped at a floor **higher** than `f` will break, and any egg dropped **at or below** floor `f` will **not break**.

Each move, you may take an unbroken egg and drop it from any floor `x` (where `1 <= x <= n`). If the egg breaks, you can no longer use it. However, if the egg does not break, you may reuse it in future moves.

Return _the **minimum number of moves** that you need to determine **with certainty** what the value of_ `f` is.

[Leetcode Link](https://leetcode.com/problems/super-egg-drop)

#### Example 1:

```
Input: k = 1, n = 2
Output: 2
Explanation:
Drop the egg from floor 1. If it breaks, we know that f = 0.
Otherwise, drop the egg from floor 2. If it breaks, we know that f = 1.
If it does not break, then we know f = 2.
Hence, we need at minimum 2 moves to determine with certainty what the value of f is.
```

#### Example 2:

```
Input: k = 2, n = 6
Output: 3
```

#### Example 3:

```
Input: k = 3, n = 14
Output: 4
```

#### Constraints:

- `1 <= k <= 100`
- `1` `<=` `n` `<=` `10`<sup>4</sup>

### Code

```python title="Python Code"

class Solution:
    def superEggDrop(self, K, N):
        dp = [[0] * (K + 1) for i in range(N + 1)]
        for m in range(1, N + 1):
            for k in range(1, K + 1):
                dp[m][k] = dp[m - 1][k - 1] + dp[m - 1][k] + 1
            if dp[m][K] >= N: return m
```
