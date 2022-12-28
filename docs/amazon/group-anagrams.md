---
sidebar_position: 138
tags: [amazon]
---

# Group Anagrams

### Problem Statement

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

[Leetcode link](https://leetcode.com/problems/group-anagrams/)

#### Example 1:

```
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
```

#### Example 2:

```
Input: strs = [""]
Output: [[""]]
```

#### Example 3:

```
Input: strs = ["a"]
Output: [["a"]]
```

#### Constraints:

- 1 <= strs.length <= 10<sup>4</sup>
- 0 <= strs[i].length <= 100
- strs[i] consists of lowercase English letters.

### Code

```python title="Python Code"

from collections import defaultdict

class Solution(object):
    def key(self, s):
        base = ord('z') - ord('a')
        k = 0
        pow = 1
        for c in sorted(s):
            k += pow * (ord(c) - ord('a'))
            pow *= base
        return k

    def groupAnagrams(self, strs):
        groups = defaultdict(lambda: [])
        for s in strs:
            groups[self.key(s)].append(s)
        return groups.values()

```
