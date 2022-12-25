---
sidebar_position: 9
tags: [adobe]
---

# Generate Parentheses

### Problem Statement

Given `n` pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

[Leetcode Link](https://leetcode.com/problems/generate-parentheses)

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

- `1 <= n <= 8`

### Code

```python title="Python Code"

class Solution:
# @param {integer} n
# @return {string[]}
    def generateParenthesis(self, n):
        if not n:
            return []
        left, right, ans = n, n, []
        self.dfs(left,right, ans, "")
        return ans

    def dfs(self, left, right, ans, string):
        if right < left:
            return
        if not left and not right:
            ans.append(string)
            return
        if left:
            self.dfs(left-1, right, ans, string + "(")
        if right:
            self.dfs(left, right-1, ans, string + ")")

```