---
sidebar_position: 181
tags: [facebook]
---

# Sum of Two Integers

### Problem Statement

Given two integers `a` and `b`, return the `sum` of the two integers without using the operators `+` and `-`.

[Leetcode Link](https://leetcode.com/problems/sum-of-two-integers)

#### Example 1:

```
Input: a = 1, b = 2
Output: 3
```

#### Example 2:

```
Input: a = 2, b = 3
Output: 5
```

#### Constraints:

- `-1000 <= a, b <= 1000`

### Code

```python title="Python Code"

class Solution(object):
    def getSum(self, a, b):
        list = []
        list.append(a)
        list.append(b)
        return sum(list)
```
