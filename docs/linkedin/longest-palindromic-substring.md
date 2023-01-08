---
sidebar_position: 42
tags: [LinkedIn]
---

# Longest Palindrome Substring

### Problem Statement

Given a string `s`, return the longest palindromic substring in `s`.

[Leetcode link](https://leetcode.com/problems/longest-palindromic-substring)

#### Example 1:

```
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
```

#### Example 2:

```
Input: s = "cbbd"
Output: "bb"
```

#### Constraints:

- `1 <= s.length <= 1000`
- `s` consist of only digits and English letters.

### Code

```python title="Python Code"
class Solution:
    def longestPalindrome(self, s: str) -> str:
        longest = ''
        def findLongest(s, l, r):
            while l>=0 and r<len(s) and s[l] == s[r]:
                l-=1
                r+=1
            return s[l+1:r]

        for i in range(len(s)):
            s1 = findLongest(s, i, i)
            if len(s1) > len(longest): longest = s1

            s2 = findLongest(s, i, i+1)
            if len(s2) > len(longest): longest = s2

        return longest
```
