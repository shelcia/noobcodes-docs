---
sidebar_position: 42
tags: [facebook]
---

# Multiply Strings

### Problem Statement

Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

[Leetcode Link](https://leetcode.com/problems/multiply-strings)

#### Example 1:

```
Input: num1 = "2", num2 = "3"
Output: "6"
```

#### Example 2:

```
Input: num1 = "123", num2 = "456"
Output: "56088"
```

#### Constraints:

- 1 <= num1.length, num2.length <= 200
- num1 and num2 consist of digits only.
- Both num1 and num2 do not contain any leading zero, except the number 0 itself.

### Code

```python title="Python Code"
class Solution(object):
    def multiply(self, num1, num2):
        """
        :type num1: str
        :type num2: str
        :rtype: str
        """
        if not num1 or not num2: return
        # ratio is used to mimic to real world multiplication
        ratio = 1
        sums = 0
        for n1 in num1[::-1]:
            carrier = 0
            n1 = int(n1)
            # use temp to store multiplication between one n1 digit and all n2 digits
            temp = ""
            for n2 in num2[::-1]:
                n2 = int(n2)
                # add current digit to head of temp
                temp = str((n1 * n2 + carrier) % 10) + temp
                # update carrier which is used on next n2 digit
                carrier = (n1 * n2 + carrier) // 10
            # if carrier is not 0, append carrier before lett most digit
            if carrier:
                temp = str(carrier) + temp
            sums += int(temp) * ratio
            # next round ratio is enlarged by 10 times to move temp left by 1 digit
            ratio *= 10
        return str(sums)

``
```
