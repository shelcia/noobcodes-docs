---
sidebar_position: 147
tags: [amazon]
---

# Is Subsequence

### Problem Statement

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

[Leetcode Link](https://leetcode.com/problems/is-subsequence/)

#### Example 1:

```
Input: s = "abc", t = "ahbgdc"
Output: true
```

#### Example 2:

```
Input: s = "axc", t = "ahbgdc"
Output: false
```

#### Constraints:

- 0 <= s.length <= 100
- 0 <= t.length <= 104
- s and t consist only of lowercase English letters.

### Code

```python title="Python Code"

class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        if len(s) > len(t):return False
        if len(s) == 0:return True
        subsequence=0
        for i in range(0,len(t)):
            if subsequence <= len(s) -1:
                print(s[subsequence])
                if s[subsequence]==t[i]:

                    subsequence+=1
        return  subsequence == len(s)
```
