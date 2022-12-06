---
sidebar_position: 3
tags: [Blind 75, string, dynamic programming]
---

# Palindromic Substring

### Problem Statement

Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

### Examples

```
Example 1:

Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".

Example 2:

Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
```

### Constraints

```
1 <= s.length <= 1000
s consists of lowercase English letters.
```

### Code

```jsx title="Python3 Code"

class Solution:
    def countSubstrings(self, s: str) -> int:
        res = n = len(s) 
        for i in range(n):
            r = l = i
            while r + 1 < n and s[l] == s[r+1]:
                r += 1
                res += 1
            while r + 1 < n and l > 0 and s[l-1] == s[r+1]:
                r += 1
                l -= 1
                res += 1
        return res

```
