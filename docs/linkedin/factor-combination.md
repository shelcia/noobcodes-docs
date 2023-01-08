---
sidebar_position: 19
tags: [linkedin]
---

# Factor Combinations

### Problem Statement

Numbers can be regarded as product of its factors. For example,

```
8 = 2 x 2 x 2;
  = 2 x 4.
```

Write a function that takes an integer n and return all possible combinations of its factors.

[Leetcode Link](https://leetcode.com/problems/factor-combinations/)

#### Example 1:

```
Input: 12
Output:
[
  [2, 6],
  [2, 2, 3],
  [3, 4]
]
Explanation:
2*6 = 12
2*2*3 = 12
3*4 = 12
```

#### Example 2:

```
Input: 32
Output:
[
  [2, 16],
  [2, 2, 8],
  [2, 2, 2, 4],
  [2, 2, 2, 2, 2],
  [2, 4, 4],
  [4, 8]
]
Explanation:
2*16=32
2*2*8=32
2*2*2*4=32
2*2*2*2*2=32
2*4*4=32
4*8=32
```

### Code

```python title="Python"
class Solution:
    """
    @param n: a integer
    @return: return a 2D array
    """
    def getFactors(self, n):
        # write your code here
        def dfs(n, st):
            res = []
            i = st
            # we use st(start) to maintain the increasing sequence
            # to avoid duplicats
            while i <= n:
                if i * i > n:
                    break
                if n % i == 0:
                    sub = dfs(n / i, i)
                    for lst in sub:
                        res.append([i] + lst)
                i += 1
            res.append([n])
            return res

        res = dfs(n, 2)
        res.pop() # do not include the n itself
        return res
```
