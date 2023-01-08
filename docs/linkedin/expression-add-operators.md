---
sidebar_position: 18
tags: [linkedin]
---

# Expression Add Operators

### Problem Statement

Given a string num that contains only digits and an integer target, return all possibilities to insert the binary operators `'+'`, `'-'`, and/or `'*'` between the digits of num so that the resultant expression evaluates to the target value.

Note that operands in the returned expressions should not contain leading zeros.

[Leetcode Link](https://leetcode.com/problems/expression-add-operators/)

#### Example 1:

```
Input: num = "123", target = 6
Output: ["1*2*3","1+2+3"]
Explanation: Both "1*2*3" and "1+2+3" evaluate to 6.
```

#### Example 2:

```
Input: num = "232", target = 8
Output: ["2*3+2","2+3*2"]
Explanation: Both "2*3+2" and "2+3*2" evaluate to 8.
```

#### Example 3:

```
Input: num = "3456237490", target = 9191
Output: []
Explanation: There are no expressions that can be created from "3456237490" to evaluate to 9191.
```

#### Constraints:

- 1 <= num.length <= 10
- num consists of only digits.
- -2<sup>31</sup> <= target <= 2<sup>31</sup> - 1

### Code

```python title="Python"
class Solution:
    def addOperators(self, s: str, target: int) -> List[str]:
        def backtrack(i, path, resultSoFar, prevNum):
            if i == len(s):
                if resultSoFar == target:
                    ans.append(path)
                return

            for j in range(i, len(s)):
                if j > i and s[i] == '0': break  # Skip leading zero number
                num = int(s[i:j + 1])
                if i == 0:
                    backtrack(j + 1, path + str(num), resultSoFar + num, num)  # First num, pick it without adding any operator
                else:
                    backtrack(j + 1, path + "+" + str(num), resultSoFar + num, num)
                    backtrack(j + 1, path + "-" + str(num), resultSoFar - num, -num)
                    backtrack(j + 1, path + "*" + str(num), resultSoFar - prevNum + prevNum * num, prevNum * num)  # Can imagine with example: 1+2*3*4

        ans = []
        backtrack(0, "", 0, 0)
        return ans
```
