---
sidebar_position: 220
tags: [facebook]
---

# Valid Palindrome II

### Problem Statement

Given a string s, return true if the s can be palindrome after deleting at most one character from it.

[Leetcode Link](https://leetcode.com/problems/valid-palindrome-ii)

### Examples:

```
Example 1:

Input: s = "aba"
Output: true


Example 2:

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.


Example 3:

Input: s = "abc"
Output: false
```

### Constraints:

- 1 <= s.length <= 10<sup>5</sup>
- s consists of lowercase English letters.

### Code

```python title="Python Code"
class Solution:
    def validPalindrome(self, s: str) -> bool:
        i,j=0,len(s)-1
        while i<j:
            if s[i]!=s[j]:
                left_remove=s[i+1:j+1]
                right_remove=s[i:j]
                return left_remove==left_remove[-1::-1] or right_remove==right_remove[-1::-1]
            else:
                i+=1
                j-=1
        return True
```
