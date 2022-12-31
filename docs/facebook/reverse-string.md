---
sidebar_position: 126
tags: [facebook]
---

# Reverse String

### Problem Statement

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

[Leetcode link](https://leetcode.com/problems/reverse-string)

#### Example 1:

```
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
```

#### Example 2:

```
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
```

#### Constraints:

- 1 <= s.length <= 10<sup>5</sup>
- s[i] is a printable ascii character.

### Code

```python title="Python Code"
class Solution:
    def reverseString(self, s):
        lst = list(s)
        result = []
        i = len(lst)
        while i > 0:
            i -= 1
            result.append(lst[i])
        return "".join(result)

```
