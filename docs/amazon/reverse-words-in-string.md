---
sidebar_position: 71
tags: [amazon]
---

# Reverse Words in a String

### Problem Statement

Given an input string `s`, reverse the order of the **words**.

A **word** is defined as a sequence of non-space characters. The **words** in `s` will be separated by at least one space.

Return _a string of the words in reverse order concatenated by a single space_.

**Note** that `s` may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

[Leetcode link](https://leetcode.com/problems/reverse-words-in-a-string)

#### Example 1:

```
Input: s = "the sky is blue"
Output: "blue is sky the"
```

#### Example 2:

```
Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
```

#### Example 3:

```
Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
```

#### Constraints:

- 1 <= s.length <= 10<sup>4</sup>
- `s` contains English letters (upper-case and lower-case), digits, and spaces `' '`.
- There is **at least one** word in `s`.

### Code

```jsx title="Python"
class Solution:
    def reverseWords(self, s: str) -> str:
        return " ".join(s.split()[::-1])

```

```jsx title="C++"
class Solution
{
public:
    string reverseWords(string s)
    {
        stringstream ss(s);
        string rev, w;

        ss >> rev;
        while (ss >> w) rev = w + " " + rev;

        return rev.substr(0, rev.length());
    }
};
```
