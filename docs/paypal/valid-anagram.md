---
sidebar_position: 13
tags: [paypal]
---

# Valid Anagram

### Problem Statement

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

#### Example 1:

```
Input: s = "anagram", t = "nagaram"
Output: true
```

#### Example 2:

```
Input: s = "rat", t = "car"
Output: false
```

#### Contraints:

- 1 <= s.length, t.length <= 5 * 10<sup>4</sup>
- s and t consist of lowercase English letters.

[Leetcode Link](https://leetcode.com/problems/valid-anagram/)

### Code 

```jsx title="Python"
from collections import Counter
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return Counter(s) == Counter(t)
```

```jsx title="C++"
class Solution {
public:
    bool isAnagram(string s, string t) {
        sort(s.begin() , s.end());
        sort(t.begin() , t.end());
        return s==t;
    }
};
```