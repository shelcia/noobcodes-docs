---
sidebar_position: 119
tags: [facebook]
---

# Repeated String Match

### Problem Statement

Given two strings a and b, return the minimum number of times you should repeat string a so that string b is a substring of it. If it is impossible for b​​​​​​ to be a substring of a after repeating it, return -1.

Notice: string "abc" repeated 0 times is "", repeated 1 time is "abc" and repeated 2 times is "abcabc".

[Leetcode link](https://leetcode.com/problems/repeated-string-match/)

#### Example 1:

```
Input: a = "abcd", b = "cdabcdab"
Output: 3
Explanation: We return 3 because by repeating a three times "abcdabcdabcd", b is a substring of it.
```

#### Example 2:

```
Input: a = "a", b = "aa"
Output: 2
```

#### Constraints:

- 1 <= a.length, b.length <= 10<sup>4</sup>
- a and b consist of lowercase English letters.

### Code

```python title="Python Code"
class Solution:
    def repeatedStringMatch(self, A, B):
        C = ""
        for i in range(len(B)/len(A) + 3):
            if B in C:
                return i
            C += A
        return -1

```
