---
sidebar_position: 60
tags: [facebook]
---

# Number of Ways to Stay in the Same Place After Some Steps

### Problem Statement

You have a pointer at index 0 in an array of size arrLen. At each step, you can move 1 position to the left, 1 position to the right in the array, or stay in the same place (The pointer should not be placed outside the array at any time).

Given two integers steps and arrLen, return the number of ways such that your pointer is still at index 0 after exactly steps steps. Since the answer may be too large, return it modulo 10<sup>9</sup> + 7.

[Leetcode Link](https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps)

#### Example 1:

```
Input: steps = 3, arrLen = 2
Output: 4
Explanation: There are 4 differents ways to stay at index 0 after 3 steps.
Right, Left, Stay
Stay, Right, Left
Right, Stay, Left
Stay, Stay, Stay
```

#### Example 2:

```
Input: steps = 2, arrLen = 4
Output: 2
Explanation: There are 2 differents ways to stay at index 0 after 2 steps
Right, Left
Stay, Stay
```

#### Example 3:

```
Input: steps = 4, arrLen = 2
Output: 8
```

#### Constraints:

- 1 <= steps <= 500
- 1 <= arrLen <= 10<sup>6</sup>

### Code

```python title="Python Code"
class Solution:
    def numWays(self, steps: int, arrLen: int) -> int:
        def recurse(idx, cnt):
            if cnt == steps:
                if idx == 0:
                    return 1
                return 0
            if (idx, cnt) in memo:
                return memo[(idx,cnt)]
            ways = 0
            if 0 <= idx < arrLen - 1:
                ways += recurse(idx+1, cnt+1)
            if 0 < idx < arrLen:
                ways += recurse(idx-1, cnt+1)
            if 0 <= idx < arrLen:
                ways += recurse(idx, cnt+1)
            memo[(idx,cnt)] = ways
            return memo[(idx,cnt)]
        memo = {}
        return recurse(0,0) % (10**9 + 7)
```
