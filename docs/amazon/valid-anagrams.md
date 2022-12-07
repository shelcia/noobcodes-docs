---
sidebar_position: 25
tags: [amazon]
---

# Valid Anagram

### Problem Statement

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 
#### Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

#### Example 2:

Input: s = "rat", t = "car"
Output: false

### Code - Approach 1

```jsx title="Python Code"
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        s=list(s)
        if len(t)!=len(s):
            return False
        for c in t:
            if c in s:
                s.remove(c)
        if len(s)==0:
            return True
        else:
            return False
```

### Code - Approach 2 (Hashmap)

```jsx title="Python Code"
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s)!=len(t):
            return False
        countS,countT={},{}

        for i in range(len(s)):
            countS[s[i]]=1+countS.get(s[i],0) 
            countT[t[i]]=1+countT.get(t[i],0)
        for ch in countS:
            if countS[ch]!=countT.get(ch,0):
                return False
        return True      
```
        # the get function prevents Python from throwing a KeyError when a key 
        is not present in the map, it returns 0 instead