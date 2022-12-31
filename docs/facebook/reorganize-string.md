---
sidebar_position: 118
tags: [facebook]
---

# Reorganize String

### Problem Statement

Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.

Return any possible rearrangement of s or return "" if not possible.

[Leetcode link](https://leetcode.com/problems/reorganize-string/)

#### Example 1:

```
Input: s = "aab"
Output: "aba"
```

#### Example 2:

```
Input: s = "aaab"
Output: ""
```

#### Constraints:

- 1 <= s.length <= 500
- s consists of lowercase English letters.

### Code

```python title="Python Code"
class Solution:
    def reorganizeString(self, s: str) -> str:
        q = []
        t = []
        m = Counter(s)
        for c, cnt in m.items():
            heappush(q, [-cnt, c])
        while 1 < len(q):
            cnt_a, a = heappop(q)
            cnt_b, b = heappop(q)
            t.append(a); cnt_a += 1
            t.append(b); cnt_b += 1
            if cnt_a: heappush(q, [cnt_a, a])
            if cnt_b: heappush(q, [cnt_b, b])
        if len(q):
            _, a = heappop(q)
            t.append(a)
        return ''.join(t) if len(s) == len(t) else ''

```
