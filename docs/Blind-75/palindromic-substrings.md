---
sidebar_position: 4
tags: [blind-75]
---

# Palindromic Substrings

### Problem Statement

Given a string `s`, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

#### Example 1:

```
Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
```
#### Example 2:

```
Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
```

#### Constraints:

* `1 <= s.length <= 1000`
* `s` consists of lowercase English letters.
### Code

```jsx title="Python Code"
class Solution:
    def countSubstrings(self, s: str) -> int:
        count = 0
        N = len(s)
        dp = [[False] * N for _ in range(N)]
        for l in range(1, N + 1): #each possible length when the string length is l
            for start in range(N - l + 1): #outer
                end = start+l-1
                if l == 1 or (l == 2 and s[start] == s[end]) or (l >= 3 and s[start] == s[end] and dp[start + 1][end - 1]):#dp
                    dp[start][end] = True
                    count += 1
        return count
```