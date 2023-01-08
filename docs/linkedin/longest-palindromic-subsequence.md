---
sidebar_position: 41
tags: [linkedin]
---

# Longest Palindrome Subsequence

### Problem Statement

Given a string s, find the longest palindromic subsequence's length in s.

A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

[Leetcode link](https://leetcode.com/problems/longest-palindromic-subsequence/)

#### Example 1:

```
Input: s = "bbbab"
Output: 4
Explanation: One possible longest palindromic subsequence is "bbbb".
```

#### Example 2:

```
Input: s = "cbbd"
Output: 2
Explanation: One possible longest palindromic subsequence is "bb".
```

#### Constraints:

- 1 <= s.length <= 1000
- s consists only of lowercase English letters.

### Code

```python title="Python Code"
class Solution(object):
    def longestPalindromeSubseq(self, s):

        n = len(s)
        dp = [[0 for j in range(n)] for i in range(n)]

        for i in range(0, n):## that is a starting point
            dp[i][i] = 1
            for j in range(i-1, -1, -1):##this is a terminal point
                if s[i] == s[j]:
                    dp[i][j] = dp[i-1][j+1] + 2
                else:
                    dp[i][j] = max(dp[i-1][j], dp[i][j+1])

        return dp[n-1][0]
```
