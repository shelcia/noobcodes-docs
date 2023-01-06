---
sidebar_position: 67
tags: [LinkedIn]
---

# Repeated DNA Sequences

### Problem Statement

The **DNA sequence** is composed of a series of nucleotides abbreviated as `'A'`, `'C'`, `'G'`, and `'T'`.

- For example, `"ACGAATTCCG"` is a **DNA sequence**.

When studying **DNA**, it is useful to identify repeated sequences within the DNA.

Given a string `s` that represents a **DNA sequence**, return all the **10-letter-long** sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in **any order**.

[Leetcode Link](https://leetcode.com/problems/repeated-dna-sequences/)

### Code

```jsx title="Python"
class Solution(object):
    def findRepeatedDnaSequences(self, s):
        n = len(s)
        cnt = defaultdict(int)
        for i in range(n - 9):
            cnt[s[i:i+10]] += 1
        
        ans = []
        for key, value in cnt.items():
            if value >= 2: # Found a string that occurs more than once
                ans.append(key)
        return ans
```
