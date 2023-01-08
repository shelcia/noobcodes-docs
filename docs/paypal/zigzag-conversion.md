---
sidebar_position: 16
tags: [paypal]
---

# Zigzag Conversion

### Problem Statement

The string `"PAYPALISHIRING"` is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

```
P   A   H   N
A P L S I I G
Y   I   R
```

And then read line by line: `"PAHNAPLSIIGYIR"`

Write the code that will take a string and make this conversion given a number of rows:

```
string convert(string s, int numRows);
```

#### Example 1:

```
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
```

#### Example 2:

```
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
```

#### Example 3:

```
Input: s = "A", numRows = 1
Output: "A"
```

#### Constraints:

- `1 <= s.length <= 1000`
- `s` consists of English letters (lower-case and upper-case), `','` and `'.'`.
- `1 <= numRows <= 1000`

[Leetcode Link](https://leetcode.com/problems/zigzag-conversion/)

### Code

```jsx title="Python"
class Solution:
    def convert(self, s: str, numRows: int) -> str:
        template = list(range(numRows)) + list(range(numRows - 2, 0, -1))

        result = [''] * numRows
        for i, char in enumerate(s):
            result[template[i % len(template)]] += char
        return ''.join(result)
```

```jsx title="C++"
class Solution {
public:
    string convert(string &s, int numRows) {
        int n = s.size();
        if(numRows <= 1) return s;
        string ans = "";
        vector<string> out(numRows);
        int crow = 0, dir = 1;  //1->going down 2->going up
        for(int i = 0; i < n; i++) {
            out[crow].push_back(s[i]);
            // if hit the turning point, change direction
            if(crow == 0) dir = 1;
            else if((crow+1) == numRows) dir = 2;
            // inc or dec row depending upon the turning pt direction
            if(dir == 1) crow++;
            else crow--;

        }

        for(auto &str: out) ans += str;
        return ans;
    }
};
```
