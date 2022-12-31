---
sidebar_position: 33
tags: [amazon]
---

# Basic Calculator II

### Problem Statement

Given a string s which represents an expression, evaluate this expression and return its value.

The integer division should truncate toward zero.

You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

[Leetcode Link](https://leetcode.com/problems/basic-calculator-ii/)

#### Example 1:

```
Input: s = "3+2*2"
Output: 7
```

#### Example 2:

```
Input: s = " 3/2 "
Output: 1
```

#### Example 3:

```
Input: s = " 3+5 / 2 "
Output: 5
```

#### Constraints:

- 1 <= s.length <= 3 \* 10<sup>5</sup>
- s consists of integers and operators ('+', '-', '\*', '/') separated by some number of spaces.
- s represents a valid expression.
- All the integers in the expression are non-negative integers in the range [0, 2<sup>31</sup> - 1].
- The answer is guaranteed to fit in a 32-bit integer.

### Code

```python title="Python Code"

class Solution:
    class Solution(object):
def calculate(self, s):
    if not s:
        return 0

    operator, number, index = ['+'], [], 0
    while index < len(s):
        char = s[index]
        if char.isdigit():
            start = index
            while index < len(s) and s[index].isdigit():
                index += 1
            current_number = int(s[start:index])
            if operator and operator[-1] in '*/':
                prev_number = number.pop()
                current_number = (prev_number / current_number) if operator.pop() == '/' else (prev_number * current_number)
            number.append(current_number)
        elif char in '+-*/':
            operator.append(char)
            index += 1
        else:
            index += 1

    return sum([n if o == '+' else -n for n, o in zip(number, operator)])

```
