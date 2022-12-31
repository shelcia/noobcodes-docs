---
sidebar_position: 127
tags: [facebook]
---

# Reverse Vowels of a String

### Problem Statement

Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

[Leetcode link](https://leetcode.com/problems/reverse-vowels-of-a-string)

#### Example 1:

```
Input: s = "hello"
Output: "holle"
```

#### Example 2:

```
Input: s = "leetcode"
Output: "leotcede"
```

#### Constraints:

- 1 <= s.length <= 3 \* 10<sup>5</sup>
- s consist of printable ASCII characters.

### Code

```python title="Python Code"
class Solution(object):
    def reverseVowels(self, s):
        """
        :type s: str
        :rtype: str
        """

        vowels = ['a', 'e', 'i', 'o', 'u']

        s = list(s)
        i = 0
        j = len(s) - 1
        while i < j:
            while i < j and s[i].lower() not in vowels:
                i += 1
            while i < j and s[j].lower() not in vowels:
                j -= 1

            if s[i].lower() in vowels and s[j].lower() in vowels:
                temp = s[i]
                s[i] = s[j]
                s[j] = temp

            i += 1
            j -= 1

        return "".join(s)

```
