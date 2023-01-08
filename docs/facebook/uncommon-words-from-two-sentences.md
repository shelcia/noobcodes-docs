---
sidebar_position: 212
tags: [facebook]
---

# Uncommon Words from Two Sentences

### Problem Statement

A sentence is a string of single-space separated words where each word consists only of lowercase letters.

A word is **uncommon** if it appears exactly once in one of the sentences, and **does not appear** in the other sentence.

Given two sentences `s1` and `s2`, return a list of all the **_uncommon words_**. You may return the answer in **any order**.

[Leetcode Link](https://leetcode.com/problems/uncommon-words-from-two-sentences)

#### Example 1:

```
Input: s1 = "this apple is sweet", s2 = "this apple is sour"
Output: ["sweet","sour"]
```

#### Example 2:

```
Input: s1 = "apple apple", s2 = "banana"
Output: ["banana"]
```

#### Constraints:

- `1 <= s1.length, s2.length <= 200`
- `s1` and `s2` consist of lowercase English letters and spaces.
- `s1` and `s2` do not have leading or trailing spaces.
- All the words in `s1` and `s2` are separated by a single space.

### Code

```python title="Python Code"

from collections import Counter
class Solution(object):
    def uncommonFromSentences(self, s1, s2):
        s1 = s1.split()
        s2 = s2.split()
        s = s1+s2
        count = Counter(s)
        arr = [k for k,v in count.iteritems() if v==1]
        return arr
```
