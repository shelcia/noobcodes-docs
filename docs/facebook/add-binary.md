---
sidebar_position: 3
tags: [facebook]
---

# Add Binary

### Problem Statement

Given two binary strings `a` and `b`, return _their sum as a binary string._

[LeetCode link](https://leetcode.com/problems/add-binary)

### Example 1:

```
Input: a = "11", b = "1"
Output: "100"
```

### Example 2:

```
Input: a = "1010", b = "1011"
Output: "10101"
```

#### Constraints:

- `1` `<=` `a.length, b.length` `<=` 10<sup>4</sup>
- `a` and `b` consist only of `'0'` or `'1'` characters.
- Each string does not contain leading zeros except for the zero itself.

### Code

```python title="Python Code"
class Solution(object):
    def addBinary(self, a, b):
        """
        :type a: str
        :type b: str
        :rtype: str
        """
        # bin(int(a, 2) + int(b, 2)).lstrip('-ob').zfill(8)
        # return bin(int(a, 2) + int(b, 2))[2:]

        # this is similar to https://leetcode.com/problems/add-two-numbers/description/
        lastA, lastB = len(a)-1, len(b)-1
        c = 0
        s = ''
        while lastA >= 0 or lastB >= 0 or c:
            valA = valB = 0
            if lastA >= 0:
                valA = 1 if a[lastA] == '1' else 0
                lastA -= 1
            if lastB >= 0:
                valB = 1 if b[lastB] == '1' else 0
                lastB -= 1

            c, val = divmod(valA + valB + c, 2)
            s = '%d' % val + s

        return s


```
