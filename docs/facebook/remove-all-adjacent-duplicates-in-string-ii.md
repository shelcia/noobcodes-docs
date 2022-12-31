---
sidebar_position: 106
tags: [facebook]
---

# Remove All Adjacent Duplicates in String II

### Problem Statement

You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

We repeatedly make duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

[Leetcode link](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/)

#### Example 1:

```
Input: s = "abcd", k = 2
Output: "abcd"
Explanation: There's nothing to delete.
```

#### Example 2:

```
Input: s = "deeedbbcccbdaa", k = 3
Output: "aa"
Explanation:
First delete "eee" and "ccc", get "ddbbbdaa"
Then delete "bbb", get "dddaa"
Finally delete "ddd", get "aa"
```

#### Example 3:

```
Input: s = "pbbcggttciiippooaais", k = 2
Output: "ps"
```

#### Constraints:

- 1 <= s.length <= 10<sup>5</sup>
- 2 <= k <= 10<sup>4</sup>
- s only contains lowercase English letters.

### Code

```python title="Python Code"
class Solution:
    def removeDuplicates(self, s, k):
        res = ""
        i = 0
        while i < len(s):
            if i < len(s)-k+1 and s[i]*k == s[i:i+k]:
                i += k
            else:
                res += s[i]
                i += 1
        if len(res) == len(s):
            return res
        else:
            return self.removeDuplicates(res,k)
```
