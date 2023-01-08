---
sidebar_position: 140
tags: [facebook]
---

# Shifting Letters

### Problem Statement

You are given a string `s` of lowercase English letters and an integer array `shifts` of the same length.

Call the `shift()` of a letter, the next letter in the alphabet, (wrapping around so that `'z'` becomes `'a'`).

- For example, `shift('a') = 'b'`, `shift('t') = 'u'`, and `shift('z') = 'a'`.

Now for each `shifts[i] = x`, we want to shift the first `i + 1` letters of `s`, `x` times.

_Return the final string after all such shifts to s are applied._

[Leetcode Link](https://leetcode.com/problems/shifting-letters)

#### Example 1:

```
Input: s = "abc", shifts = [3,5,9]
Output: "rpl"
Explanation: We start with "abc".
After shifting the first 1 letters of s by 3, we have "dbc".
After shifting the first 2 letters of s by 5, we have "igc".
After shifting the first 3 letters of s by 9, we have "rpl", the answer.
```

#### Example 2:

```
Input: s = "aaa", shifts = [1,2,3]
Output: "gfd"
```

#### Constraints:

- `1` `<=` `s.length` `<=` 10<sup>5</sup>
- `s` consists of lowercase English letters.
- `shifts.length == s.length`
- `0` `<=` `shifts[i]` `<=` `10`<sup>9</sup>

### Code

```python title="Python"
class Solution:

    def shiftingLetters(self, s: str, shifts: List[int]) -> str:
        s = list(s)
        alphabet = 'abcdefghijklmnopqrstuvwxyz'
        mydict= {'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7, 'i': 8, 'j': 9, 'k': 10, 'l': 11, 'm': 12, 'n': 13, 'o': 14, 'p': 15, 'q': 16, 'r': 17, 's': 18, 't': 19, 'u': 20, 'v': 21, 'w': 22, 'x': 23, 'y': 24, 'z': 25}
        sums = sum(shifts)
        for i in range(len(s)):
            index = mydict[s[i]]

            index = index + sums
            char = alphabet[index%26]
            sums -= shifts[i]

            s[i] = char

        s = ''.join(s)

        return s
```
