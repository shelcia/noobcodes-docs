---
sidebar_position: 65
tags: [facebook]
---

# Palindrome Number

### Problem Statement

Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

[Leetcode Link](https://leetcode.com/problems/palindrome-number)

#### Example 1:

```
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
```

#### Example 2:

```
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```

#### Example 2:

```
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```

#### Constraints:

- -2<sup>31</sup> <= x <= 2<sup>31</sup> - 1

### Code

```python title="Python Code"
class Solution:
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        y=str(x)[::-1]
        if y == str(x):
        return True
        else:
        return False
```
