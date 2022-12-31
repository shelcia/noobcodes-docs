---
sidebar_position: 34
tags: [adobe]
---

# Longest Substring with At Least K Repeating Characters

### Problem Statement

Given a string **s** and an integer `k`, return the length of the longest substring of **s** such that the frequency of each character in this substring is greater than or equal to `k`.

[Leetcode Link](https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/)

#### Example 1:

```
Input: s = "aaabb", k = 3
Output: 3
```

##### Explanation:

The longest substring is `"aaa"`, as `'a'` is repeated **3** times.

#### Example 2:

```
Input: s = "ababbc", k = 2
Output: 5
```

##### Explanation:

The longest substring is `"ababb"`, as `'a'` is repeated **2** times and `'b'` is repeated **3** times.

#### Constraints:

- `1` `<=` `s.length` `<=` 10<sup>4</sup>
- `s` consists of only lowercase English letters.
- `1` `<=` `k` `<=` 10<sup>5</sup>

### Code

```python title="Python Code"

class Solution:
    def longestSubstring(self, s: str, k: int) -> int:
        if len(s) == 0 or k > len(s):
            return 0
        c = Counter(s)
        sub1, sub2 = "", ""
        for i, letter in enumerate(s):
            if c[letter] < k:
                sub1 = self.longestSubstring(s[:i], k)
                sub2 = self.longestSubstring(s[i+1:], k)
                break
        else:
            return len(s)
        return max(sub1, sub2)

```
