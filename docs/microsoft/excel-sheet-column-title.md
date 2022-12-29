---
sidebar_position: 4
tags: [microsoft]
---

# Excel Sheet Column Title

### Problem Statement

Given an integer `columnNumber`, return _its corresponding column title as it appears in an Excel sheet_.

For example:

```
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28
...
```

#### Example 1:

```
Input: columnNumber = 1
Output: "A"
```

#### Example 2:

```
Input: columnNumber = 28
Output: "AB"
```

#### Example 3:

```
Input: columnNumber = 701
Output: "ZY"
```

#### Constaints:

- 1 <= columnNumber <= 2<sup>31</sup> - 1

[LeetCode Link](https://leetcode.com/problems/excel-sheet-column-title)

### Code

```python title="Python Code"
class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        x=columnNumber//26
        y=columnNumber%26
        if y==0:
            x-=1
            y=26
        s=chr(64+y)
        while x>0:
            y=x%26
            if y==0:
                x-=1
                y=26
            x//=26
            s+=chr(64+y)
        return s[-1::-1]

```
