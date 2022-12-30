---
sidebar_position: 22
tags: [facebook]
---

# Minimum Add to Make Parentheses Valid

### Problem Statement

A parentheses string is valid if and only if:

- It is the empty string,
- It can be written as AB (A concatenated with B), where A and B are valid strings, or
- It can be written as (A), where A is a valid string.

You are given a parentheses string s. In one move, you can insert a parenthesis at any position of the string.

- For example, if s = "()))", you can insert an opening parenthesis to be "(()))" or a closing parenthesis to be "())))".

Return the minimum number of moves required to make s valid.

[Leetcode link](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid)

#### Example 1:

```
Input: s = "())"
Output: 1
```

#### Example 2:

```
Input: s = "((("
Output: 3
```

#### Constraints:

- 1 <= s.length <= 1000
- s[i] is either '(' or ')'.

### Code

```python title="Python Code"
class Solution:
    def minAddToMakeValid(self, S):
        """
        :type S: str
        :rtype: int
        """
        cnt,cnt2 = 0, 0
        for i in range(len(S)):
            if S[i] == '(':
                cnt += 1
            elif cnt > 0 and S[i] == ')':
                cnt -= 1
        for i in range(len(S) - 1, -1, -1):
            if S[i] == ')':
                cnt2 += 1
            elif cnt2 > 0 and S[i] == '(':
                cnt2 -= 1
        return cnt + cnt2


```
