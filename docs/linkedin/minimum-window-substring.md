---
sidebar_position: 55
tags: [LinkedIn]
---

# Minimum Window Substring

### Problem Statement

Given two strings s and t of lengths m and n respectively, return the **minimum window substring** of s such that every character in t (**including duplicates**) is included in the window. If there is no such substring, return the empty string `""`.

The testcases will be generated such that the answer is **unique**.

[Leetcode Link](https://leetcode.com/problems/minimum-window-substring/)

#### Examples

```
Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.

Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
```

#### Constraints:

- m == s.length
- n == t.length
- 1 <= m, n <= 10<sup>5</sup>
- s and t consist of uppercase and lowercase English letters.

### Code

```jsx title="Python"
class Solution:
    def minWindow(self, s: str, t: str) -> str:
        lookup = Counter(t)
        mx = float("inf")
        output = ""
        S = len(s)
        start, end = 0, 0
        count = len(lookup)
        
        while end < S:
            
            # End Pointer
            while end < S and count != 0:
                if s[end] in lookup:
                    lookup[s[end]] -= 1
                    if lookup[s[end]] == 0:
                        count -=1
                end += 1
                
            # Start Pointer
            while start <= end and count == 0:
                
                if end-start < mx:
                    mx = end - start
                    output = s[start:end]
                
                if s[start] in lookup:
                    lookup[s[start]] += 1
                    if lookup[s[start]] > 0:
                        count += 1
                
                start += 1
        
        return output
```