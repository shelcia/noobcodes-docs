---
sidebar_position: 32
tags: [amazon]
---

# Basic Calculator

### Problem Statement

Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

[Leetcode Link](https://leetcode.com/problems/basic-calculator/)

#### Example 1:

```
Input: s = "1 + 1"
Output: 2
```

#### Example 2:

```
Input: s = " 2-1 + 2 "
Output: 3
```

#### Example 3:

```
Input: s = "(1+(4+5+2)-3)+(6+8)"
Output: 23
```

#### Constraints:

- 1 <= s.length <= 3 \* 10<sup>5</sup>
- s consists of digits, '+', '-', '(', ')', and ' '.
- s represents a valid expression.
- '+' is not used as a unary operation (i.e., "+1" and "+(2 + 3)" is invalid).
- '-' could be used as a unary operation (i.e., "-1" and "-(2 + 3)" is valid).
- There will be no two consecutive operators in the input.
- Every number and running calculation will fit in a signed 32-bit integer.

### Code

```python title="Python Code"

class Solution:
    def calculate(self, s):
    res, num, sign, stack = 0, 0, 1, [1]
    for i in s+"+":
        if i.isdigit():
            num = 10*num + int(i)
        elif i in "+-":
            res += num * sign * stack[-1]
            sign = 1 if i=="+" else -1
            num = 0
        elif i == "(":
            stack.append(sign * stack[-1])
            sign = 1
        elif i == ")":
            res += num * sign * stack[-1]
            num = 0
            stack.pop()
    return res

```
