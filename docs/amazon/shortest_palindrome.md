---
sidebar_position: 46
tags: [amazon]
---

# Shortest Palindrome

### Problem Statement

You are given a string `s`. You can convert `s` to a
palindrome by adding characters in front of it.

Return the shortest palindrome you can find by performing this transformation.

[Leetcode Link](https://leetcode.com/problems/shortest-palindrome/)

#### Example 1:

```
Input: s = "aacecaaa"
Output: "aaacecaaa"
```

#### Example 2:

```
Input: s = "abcd"
Output: "dcbabcd"
```

#### Constraints:

- `0 <= s.length <= 5 * 104`
- `s` consists of lowercase English letters only.

### Code

```python title="Python Code"

class Solution:
    def shortestPalindrome(self, s):
        r = s[::-1]
        for i in range(len(s) + 1):
            if s.startswith(r[i:]):
                return r[:i] + s
```
