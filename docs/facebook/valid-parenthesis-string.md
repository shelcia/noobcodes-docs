---
sidebar_position: 222
tags: [facebook]
---

# Valid Parenthesis String

### Problem Statement

Given a string s containing only three types of characters: `'('`, `')'` and `'*'`, return true **_if `s` is valid_**.

The following rules define a **valid** string:

- Any left parenthesis `'('` must have a corresponding right parenthesis `')'`.
- Any right parenthesis `')'` must have a corresponding left parenthesis `'('`.
- Left parenthesis `'('` must go before the corresponding right parenthesis `')'`.
- `'*'` could be treated as a single right parenthesis `')'` or a single left parenthesis `'('` or an empty string `""`.

[Leetcode Link](https://leetcode.com/problems/valid-parenthesis-string)

#### Example 1:

```
Input: s = "()"
Output: true
```

#### Example 2:

```
Input: s = "(*)"
Output: true
```

#### Example 3:

```
Input: s = "(*))"
Output: true
```

#### Constraints:

- `1 <= s.length <= 100`
- `s[i]` is `'(', ')'` or `'*'`.

### Code

```python title="Python Code"
class Solution:
        def checkValidString(self, s: str) -> bool:
        stack, star = [], []

        for i,char in enumerate(s):
            if char == "(": stack.append(i)
            elif char == ")":
                if not stack and not star: return False
                elif stack: stack.pop()
                elif star: star.pop()
            else: star.append(i)

        while stack:
            if star and stack[-1] < star[-1]:
                stack.pop()
                star.pop()
            else:
                if not star: return False
                else: star.pop()

        return True
```
