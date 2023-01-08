---
sidebar_position: 16
tags: [linkedin]
---

# Evaluate Reverse Polish Notation

### Problem Statement

You are given an array of strings `tokens` that represents an arithmetic expression in a [Reverse Polish Notation](http://en.wikipedia.org/wiki/Reverse_Polish_notation).

Evaluate the expression. Return an integer that represents the value of the expression.

**Note** that:

- The valid operators are '+', '-', '\*', and '/'.
- Each operand may be an integer or another expression.
- The division between two integers always truncates toward zero.
- There will not be any division by zero.
- The input represents a valid arithmetic expression in a reverse polish notation.
- The answer and all the intermediate calculations can be represented in a 32-bit integer.

[Leetcode Link](https://leetcode.com/problems/evaluate-reverse-polish-notation/)

#### Example 1:

```
Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
```

#### Example 2:

```
Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
```

#### Example 3:

```
Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
```

#### Constraints:

- 1 <= tokens.length <= 10<sup>4</sup>
- tokens[i] is either an operator: "+", "-", "\*", or "/", or an integer in the range [-200, 200].

### Code

```python title="Python"
class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        def fun(st,n1,n2):
            s1,s2=1,1
            if n1<0:
                s1=-1
            if n2<0:
                s2=-1
            if st=='+':
                return n1+n2
            elif st=='-':
                return n1-n2
            elif st=='*':
                return n1*n2
            elif st=='/':
                return floor(abs(n1)/abs(n2))*(s1*s2)
        digits=[]
        for i in tokens:
            if i.isdigit() or (len(i)>1):
                digits.append(int(i))
            else:
                n1=digits.pop()
                n2=digits.pop()
                digits.append(fun(i,n2,n1))
        return digits[0]
```
