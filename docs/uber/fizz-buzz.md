---
sidebar_position: 4
tags: [uber]
---

# Fizz Buzz

### Problem Statement

Given an integer n, return a string array answer (1-indexed) where:

- answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
- answer[i] == "Fizz" if i is divisible by 3.
- answer[i] == "Buzz" if i is divisible by 5.
- answer[i] == i (as a string) if none of the above conditions are true.

[Leetcode link](https://leetcode.com/problems/fizz-buzz/)

#### Example 1:

```
Input: n = 3
Output: ["1","2","Fizz"]
```

#### Example 2:

```
Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
```

#### Example 3:

```
Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
```

#### Constraints:

- 1 <= n <= 10<sup>4</sup>

### Code

```python title="Python Code"

class Solution(object):
    def fizzBuzz(self, n):
        i = 1
        arr1 = []
        while i <= n:
            if i % 3 == 0 and i % 5 == 0:
                arr1.append("FizzBuzz")
            elif i %3 == 0:
                arr1.append("Fizz")
            elif i %5 == 0:
                arr1.append("Buzz")
            else:
                arr1.append(str(i))
            i += 1
        return arr1

```
