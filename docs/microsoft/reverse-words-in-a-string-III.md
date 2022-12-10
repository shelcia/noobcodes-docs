---
sidebar_position: 11
tags: [microsoft]
---

# Reverse Words in a String III

### Problem Statement

Given a string `s`, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

#### Example 1:

```
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
```

#### Example 2:

```
Input: s = "God Ding"
Output: "doG gniD"
```

#### Constraints:

- 1 <= s.length <= 5 \* 10<sup>4</sup>
- `s` contains printable ASCII characters.
- `s` does not contain any leading or trailing spaces.
- There is at least one word in `s`.
- All the words in `s` are separated by a single space.

### Code

```python title="Python Code"
class Solution:
    def reverseWords(self, s: str) -> str:

        words = s.split()

        reversed_words = []
        for word in words:
            reversed_words.append(word[::-1])

        return " ".join(reversed_words)
```
