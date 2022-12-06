---
sidebar_position: 2
tags: [Blind 75, string, dynamic programming]
---

# Longest Palindromic Substring

### Problem Statement

Given a string s, return the longest palindromic substring in s.

### Examples

```
Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:

Input: s = "cbbd"
Output: "bb"
```

### Constraints

```
1 <= s.length <= 1000
s consist of only digits and English letters.
```

### Code

```jsx title="Python3 Code"

class Solution:
    def longestPalindrome(self, s: str) -> str:
        def tell(i,j):
            while i>=0 and j<len(s):
                if s[i]==s[j]:
                    i-=1
                    j+=1
                else:
                    break
            i+=1
            j-=1

            return (j-i+1,i,j)

        res=[1,0,0]

        for i in range(len(s)):
            first_case=tell(i,i)
            second_case=tell(i,i+1)
            res= res if res[0]>first_case[0] else first_case
            res= res if res[0]>second_case[0] else second_case

        return s[res[1]:res[2]+1]


```
