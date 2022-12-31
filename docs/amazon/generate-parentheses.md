---
sidebar_position: 75
tags: [amazon]
---

# Generate Parentheses

### Problem Statement

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

[Leetcode link](https://leetcode.com/problems/generate-parentheses/)

#### Example 1:

```
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
```

#### Example 2:

```
Input: n = 1
Output: ["()"]
```

#### Constraints:

- 1 <= n <= 8

### Code

```python title="Python Code"
class Solution(object):
    def generateParenthesis(self, n):
        def generate(p, left, right):
            if right >= left >= 0:
                if not right:
                    yield p
                for q in generate(p + '(', left-1, right): yield q
                for q in generate(p + ')', left, right-1): yield q
        return list(generate('', n, n))

```
