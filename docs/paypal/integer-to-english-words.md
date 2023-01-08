---
sidebar_position: 14
tags: [paypal]
---

# Integer to English Words

### Problem Statement

Convert a non-negative integer `num` to its English words representation.

#### Example 1:

```
Input: num = 123
Output: "One Hundred Twenty Three"
```

#### Example 2:

```
Input: num = 12345
Output: "Twelve Thousand Three Hundred Forty Five"
```

#### Example 3:

```
Input: num = 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
```

#### Constraints:

- `0 <= num <= 2`<sup>31</sup> `- 1`

[Leetcode Link](https://leetcode.com/problems/integer-to-english-words/)

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
