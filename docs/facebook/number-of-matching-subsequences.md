---
sidebar_position: 57
tags: [facebook]
---

# Number of Matching Subsequences

### Problem Statement

Given a string s and an array of strings words, return the number of words[i] that is a subsequence of s.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".

[Leetcode Link](https://leetcode.com/problems/number-of-matching-subsequences)

#### Example 1:

```
Input: s = "abcde", words = ["a","bb","acd","ace"]
Output: 3
Explanation: There are three strings in words that are a subsequence of s: "a", "acd", "ace".
```

#### Example 2:

```
Input: s = "dsahjpjauf", words = ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]
Output: 2
```

#### Constraints:

- 1 <= s.length <= 5 \* 10<sup>4</sup>
- 1 <= words.length <= 5000
- 1 <= words[i].length <= 50
- s and words[i] consist of only lowercase English letters.

### Code

```python title="Python Code"
class Solution:
    def numMatchingSubseq(self, S, words):
        def isMatch(word, w_i, d_i):
            if w_i == len(word): return True
            l = dict_idxs[word[w_i]]
            if len(l) == 0 or d_i > l[-1]: return False
            i = l[bisect_left(l, d_i)]
            return isMatch(word, w_i + 1, i + 1)

        dict_idxs = defaultdict(list)
        for i in range(len(S)):
            dict_idxs[S[i]].append(i)
        return sum(isMatch(word, 0, 0) for word in words)
```
