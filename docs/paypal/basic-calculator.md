---
sidebar_position: 1
tags: [paypal, math, string, stack, recursion]
---

# Basic Calculator

### Problem Statement

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

### Examples

```
Example 1:

Input: s = "1 + 1"
Output: 2

Example 2:

Input: s = " 2-1 + 2 "
Output: 3

Example 3:

Input: s = "(1+(4+5+2)-3)+(6+8)"
Output: 23
```

### Constraints

```
1 <= s.length <= 3 * 105
s consists of digits, '+', '-', '(', ')', and ' '.
s represents a valid expression.
'+' is not used as a unary operation (i.e., "+1" and "+(2 + 3)" is invalid).
'-' could be used as a unary operation (i.e., "-1" and "-(2 + 3)" is valid).
There will be no two consecutive operators in the input.
Every number and running calculation will fit in a signed 32-bit integer.
```

### Code

```python title="Python3 Code"

    def calculate(self, s):
        for ch in ['+', '-', '(', ')']:
            s = s.replace(ch, ' ' + ch + ' ')
        sign = 1
        stack = [0]
        for token in s.split():
            if token in '+-':
                sign = 1 if token == '+' else -1
            elif token == '(':
                stack.extend([sign, 0])
                sign = 1
            elif token == ')':
                value = stack.pop() * stack.pop()
                stack[-1] += value
            else:
                stack[-1] += sign * int(token)
        return stack[-1]
```
