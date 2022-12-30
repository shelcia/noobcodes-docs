---
sidebar_position: 111
tags: [facebook]
---

# Remove Invalid Parentheses

### Problem Statement

Given a string s that contains parentheses and letters, remove the minimum number of invalid parentheses to make the input string valid.

Return all the possible results. You may return the answer in any order.

[Leetcode link](https://leetcode.com/problems/remove-invalid-parentheses/)

#### Example 1:

```
Input: s = "()())()"
Output: ["(())()","()()()"]
```

#### Example 2:

```
Input: s = "(a)())()"
Output: ["(a())()","(a)()()"]
```

#### Example 3:

```
Input: s = ")("
Output: [""]
```

#### Constraints:

- 1 <= s.length <= 25
- s consists of lowercase English letters and parentheses '(' and ')'.
- There will be at most 20 parentheses in s.

### Code

```python title="Python Code"
class Solution(object):
    def removeInvalidParentheses(self, s):
    def splits(s,x):
        return s[0:x] + s[x+1:]
    def Remove(s,remove_num):
        if s in self.cache: return 0
        elif remove_num > self.minremove: return 0
        elif s and s[-1] == '(': Remove(s[:len(s)-1],remove_num + 1)
        elif s and s[0] == ')': Remove(s[1:],remove_num + 1)
        else:
            r, l, s_n = [], [], 0
            while len(r) >= len(l) and s_n <= len(s) - 1:
                if s[s_n] == '(': r.append(s_n)
                elif s[s_n] == ')': l.append(s_n)
                s_n += 1
            if len(r) < len(l):
                for x in l:
                    Remove(splits(s,x),remove_num + 1)
            elif len(r) > len(l):
                for x in r:
                    Remove(splits(s,x),remove_num + 1)
            else:
                if remove_num < self.minremove: self.final = [s]; self.minremove = remove_num
                else: self.final.append(s)
        self.cache[s] = 1
    self.cache,self.minremove,self.final = {}, 1000000000000000, []
    Remove(s,0)
    return self.final

```
