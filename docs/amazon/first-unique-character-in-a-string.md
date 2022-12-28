---
sidebar_position: 133
tags: [amazon]
---

# First Unique Character in a String

### Problem Statement

Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses constant extra space.

[Leetcode link](https://leetcode.com/problems/first-unique-character-in-a-string/)

#### Example 1:

```
Input: s = "leetcode"
Output: 0
```

#### Example 2:

```
Input: s = "loveleetcode"
Output: 2
```

#### Example 3:

```
Input: s = "aabb"
Output: -1
```

#### Constraints:

- 1 <= s.length <= 10<sup>5</sup>
- s consists of only lowercase English letters.

### Code

```python title="Python Code"

class Solution(object):
    def firstUniqChar(self, s):
        """
        :type s: str
        :rtype: int
        """
        d = dict()

        for i in range(len(s)):
            if d.setdefault(s[i],[]) or True:
                d[s[i]].append(i)

        for i in range(len(s)):
            if len(d[s[i]]) == 1:
                return(i)

        return(-1)

```
