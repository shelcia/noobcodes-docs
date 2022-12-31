---
sidebar_position: 105
tags: [facebook]
---

# Remove All Adjacent Duplicates In String

### Problem Statement

You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

We repeatedly make duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

[Leetcode link](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string)

#### Example 1:

```
Input: s = "abbaca"
Output: "ca"
Explanation:
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
```

#### Example 2:

```
Input: s = "azxxzy"
Output: "ay"
```

#### Constraints:

1 <= s.length <= 105
s consists of lowercase English letters.

### Code

```python title="Python Code"
class Solution:
        def removeDuplicates(self, S):
        res = []
        for c in S:
            if res and res[-1] == c:
                res.pop()
            else:
                res.append(c)
        return "".join(res)
```
