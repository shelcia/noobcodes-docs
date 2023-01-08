---
sidebar_position: 33
tags: [LinkedIn]
---

# Integer to English Words

### Problem Statement

Convert a non-negative integer num to its English words representation.

[Leetcode link](https://leetcode.com/problems/integer-to-english-words)

#### Example 1:

```
Input: num = 123
Output: "One Hundred Twenty Three"
```

#### Example 2:

```
Input: num = 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
```

#### Constraints:

- 0 <= num <= 2<sup>31</sup> - 1

### Code

```python title="Python"
def numberToWords(self, num):
    to19 = 'One Two Three Four Five Six Seven Eight Nine Ten Eleven Twelve ' \
           'Thirteen Fourteen Fifteen Sixteen Seventeen Eighteen Nineteen'.split()
    tens = 'Twenty Thirty Forty Fifty Sixty Seventy Eighty Ninety'.split()
    def words(n):
        if n < 20:
            return to19[n-1:n]
        if n < 100:
            return [tens[n/10-2]] + words(n%10)
        if n < 1000:
            return [to19[n/100-1]] + ['Hundred'] + words(n%100)
        for p, w in enumerate(('Thousand', 'Million', 'Billion'), 1):
            if n < 1000**(p+1):
                return words(n/1000**p) + [w] + words(n%1000**p)
    return ' '.join(words(num)) or 'Zero'
```

```cpp title="C++"
class Solution {
public:
    vector<pair<int, string>> nums ={{1000000000, "Billion"}, {1000000, "Million"},
    {1000, "Thousand"}, {100, "Hundred"}, {90, "Ninety"}, {80, "Eighty"}, {70, "Seventy"},
    {60, "Sixty"}, {50, "Fifty"}, {40, "Forty"}, {30, "Thirty"}, {20, "Twenty"}, {19, "Nineteen"},
    {18, "Eighteen"}, {17, "Seventeen"}, {16, "Sixteen"}, {15, "Fifteen"}, {14, "Fourteen"},
    {13, "Thirteen"}, {12, "Twelve"}, {11, "Eleven"}, {10, "Ten"}, {9, "Nine"}, {8, "Eight"},
    {7, "Seven"}, {6, "Six"}, {5, "Five"}, {4, "Four"}, {3, "Three"}, {2, "Two"}, {1, "One"}};

    string numberToWords(int num) {
        if(num == 0)   return "Zero";

        for(auto it: nums)
            if(num >= it.first)
                return (num >= 100 ? numberToWords(num/it.first)+" " : "") + it.second + (num%it.first == 0 ? "" : " "+numberToWords(num%it.first));

        return "";
    }
};
```
