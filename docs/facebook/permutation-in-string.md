---
sidebar_position: 81
tags: [facebook]
---

# Permutation in String

### Problem Statement

Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

[Leetcode link](https://leetcode.com/problems/permutation-in-string/)

#### Example 1:

```
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
```

#### Example 2:

```
Input: s1 = "ab", s2 = "eidboaoo"
Output: false
```

#### Constraints:

- 1 <= s1.length, s2.length <= 10<sup>4</sup>
- s1 and s2 consist of lowercase English letters.

### Code

```python title="Python Code"
class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        cntr, w = Counter(s1), len(s1)

        for i in range(len(s2)):
            if s2[i] in cntr:
                cntr[s2[i]] -= 1
            if i >= w and s2[i-w] in cntr:
                cntr[s2[i-w]] += 1

            if all([cntr[i] == 0 for i in cntr]): # see optimized code below
                return True

        return False

```
