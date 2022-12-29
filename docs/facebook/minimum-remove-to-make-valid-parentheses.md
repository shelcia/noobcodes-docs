---
sidebar_position: 31
tags: [facebook]
---

# Minimum Remove to Make Valid Parentheses

### Problem Statement

Given a string s of '(' , ')' and lowercase English characters.

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

- It is the empty string, contains only lowercase characters, or
- It can be written as AB (A concatenated with B), where A and B are valid strings, or
- It can be written as (A), where A is a valid string

[Leetcode link](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses)

#### Example 1:

```
Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
```

#### Example 2:

```
Input: s = "a)b(c)d"
Output: "ab(c)d"
```

#### Example 3:

```
Input: s = "))(("
Output: ""
Explanation: An empty string is also valid.
```

#### Constraints:

- 1 <= s.length <= 10<sup>5</sup>
- s[i] is either'(' , ')', or lowercase English letter.

### Code

```python title="Python Code"
class Solution:
    def minRemoveToMakeValid(self, s) :
        stack=[]
        split_str=list(s)
        for i in range(len(s)):
            if s[i]=='(':
                # if current char is '(' then push it to stack
                stack.append(i)
            elif s[i]==')':
                # if current char is ')' then pop top of the stack
                if len(stack) !=0:
                    stack.pop()
                else:
                    # if our stack is empty then we can't pop so make  current char as ''
                    split_str[i]=""
        for i in stack:
            split_str[i]=""
        return '' .join(split_str)

```
