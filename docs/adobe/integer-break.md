---
sidebar_position: 31
tags: [adobe]
---

# Integer Break

### Problem Statement

Given an integer `n`, break it into the sum of `k` positive integers, where `k >= 2`, and maximize the product of those integers.

Return the maximum product you can get.

[Leetcode Link](https://leetcode.com/problems/integer-break/)

#### Example 1:

```
Input: n = 2
Output: 1
```

##### Explanation:

`2 = 1 + 1, 1 × 1 = 1`

#### Example 2:

```
Input: n = 10
Output: 36
```

##### Explanation:

`10 = 3 + 3 + 4, 3 × 3 × 4 = 36`

#### Constraints:

- `2 <= n <= 58`

### Code

```python title="Python Code"

class Solution(object):
    def integerBreak(self, n):
        dp = [None, 1]
        for m in range (2, n + 1):
            j = m - 1
            i = 1
            max_product = 0
            while i <= j:
                max_product = max(max_product, max(i, dp[i]) * max(j, dp[j]))
                j -= 1
                i += 1
            dp.append(max_product)
        return dp[n]

```
