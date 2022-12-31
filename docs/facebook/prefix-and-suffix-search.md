---
sidebar_position: 90
tags: [facebook]
---

# Prefix and Suffix Search

### Problem Statement

Design a special dictionary that searches the words in it by a prefix and a suffix.

Implement the WordFilter class:

- WordFilter(string[] words) Initializes the object with the words in the dictionary.
- f(string pref, string suff) Returns the index of the word in the dictionary, which has the prefix pref and the suffix suff. If there is more than one valid index, return the largest of them. If there is no such word in the dictionary, return -1.

[Leetcode Link](https://leetcode.com/problems/prefix-and-suffix-search)

#### Example 1:

```
Input
["WordFilter", "f"]
[[["apple"]], ["a", "e"]]
Output
[null, 0]
Explanation
WordFilter wordFilter = new WordFilter(["apple"]);
wordFilter.f("a", "e"); // return 0, because the word at index 0 has prefix = "a" and suffix = "e".
```

#### Constraints:

- 1 <= words.length <= 10<sup>4</sup>
- 1 <= words[i].length <= 7
- 1 <= pref.length, suff.length <= 7
- words[i], pref and suff consist of lowercase English letters only.
- At most 10<sup>4</sup> calls will be made to the function f.

### Code

```python title="Python Code"
class Solution:
    def __init__(self, words):
        self.pre_suf_map = {}
        for word in range(len(words)):
            length = len(words[word])
            for i in range(length + 1):
                for j in reversed(range(length + 1)):
                    if (i > 10 or (length - j) > 10) > length:
                        continue
                    comb = words[word][:i] + "." + words[word][j:]
                    self.pre_suf_map[comb] = word

    def f(self, prefix, suffix):
        pref_suf = prefix + "." + suffix
        if pref_suf in self.pre_suf_map:
            return self.pre_suf_map[pref_suf]
        return -1

```
