---
sidebar_position: 11
tags: [LinkedIn]
---

# Count Different Palindromic Subsequences

### Problem Statement

Given a string s, return *the number of different non-empty palindromic subsequences* in s. Since the answer may be very large, return it modulo 10<sup>9</sup> + 7.

A subsequence of a string is obtained by deleting zero or more characters from the string.

A sequence is palindromic if it is equal to the sequence reversed.

Two sequences a1, a2, ... and b1, b2, ... are different if there is some i for which `ai != bi`.

[Leetcode Link](https://leetcode.com/problems/count-different-palindromic-subsequences/)

#### Example 1:

```
Input: s = "bccb"
Output: 6
Explanation: The 6 different non-empty palindromic subsequences are 'b', 'c', 'bb', 'cc', 'bcb', 'bccb'.
Note that 'bcb' is counted only once, even though it occurs twice.
```

#### Example 2:

```
Input: s = "abcdabcdabcdabcdabcdabcdabcdabcddcbadcbadcbadcbadcbadcbadcbadcba"
Output: 104860361
Explanation: There are 3104860382 different non-empty palindromic subsequences, which is 104860361 modulo 109 + 7.
```

#### Constraints:

- 1 <= s.length <= 1000
- s[i] is either 'a', 'b', 'c', or 'd'.

### Code

```jsx title="Python"
class Solution:        
    def countPalindromicSubsequences(self, s: str) -> int:                                   
        mod = 10**9 + 7
        
        @cache
        def dp(i, j):
            if i > j: return 0            
            if i == j: return 1

            result = 0

            for c in set(s[i:j + 1]):
                L, R = s.find(c, i, j  + 1), s.rfind(c, i, j + 1)
                if L == R: result += 1                    
                else: result += dp(L + 1, R - 1) + 2

            return result % mod        
        
        return dp(0, len(s) - 1) % mod
```

