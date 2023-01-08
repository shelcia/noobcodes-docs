---
sidebar_position: 70
tags: [linkedin]
---

# Rotate String

### Problem Statement

Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

- For example, if `s = "abcde"`, then it will be `"bcdea"` after one shift.

[Leetcode Link](https://leetcode.com/problems/rotate-string/)

#### Example 1:

```
Input: s = "abcde", goal = "cdeab"
Output: true
```

#### Example 2:

```
Input: s = "abcde", goal = "abced"
Output: false
```

#### Constraints:

- 1 <= s.length, goal.length <= 100
- s and goal consist of lowercase English letters.

### Code

```python title="Python"
class Solution:
    def rotateString(self, s: str, goal: str) -> bool:
        if s == goal:
            return True

        s, goal = [*s], [*goal]

        # unpacking the strings (creates list)
        # ex: 'hello' -> ['h','e','l','l','o']


        for x in range(len(s)):
            a = s[0]
            s.pop(0); s.append(a)
            # rotate the string by saving the first character then removing it and then adding it to the end

            if s == goal:
                return True
            # checking if the rotated string is the same as the goal

        return False
```
