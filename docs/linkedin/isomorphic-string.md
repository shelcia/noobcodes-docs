---
sidebar_position: 36
tags: [linkedin]
---

# Isomorphic Strings

### Problem Statement

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

[Leetcode Link](https://leetcode.com/problems/isomorphic-strings/)

#### Example 1:

```
Input: s = "egg", t = "add"
Output: true
```

#### Example 2:

```
Input: s = "foo", t = "bar"
Output: false
```

#### Example 3:

```
Input: s = "paper", t = "title"
Output: true
```

### Code

```python title="Python"
class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        return len(set(s))==len(set(zip(s,t)))==len(set(t))
```

```jsx title="C++"
class Solution {
public:
    bool isIsomorphic(string s, string t) {
        unordered_map<char, char> m1, m2;
        for (int i = 0; i < s.size(); i++) {
            if (!m1.count(s[i]) && !m2.count(t[i]))
                m1[s[i]] = t[i];m2[t[i]] = s[i];
             else
					if (m1[s[i]] != t[i] || m2[t[i]] != s[i])  return false;
        }
        return true;
    }
};
```
