---
sidebar_position: 829
tags: [Goldman Sachs]
---

# Valid Parentheses

### Problem Statement

Given a string s containing just the characters `'(', ')', '{', '}', '[' and ']'`, determine if the input string is valid.

An input string is valid if:

- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.

[Leetcode Link](https://leetcode.com/problems/valid-parentheses/)

#### Example 1:

```
Input: s = "()"
Output: true
```

#### Example 2:

```
Input: s = "()[]{}"
Output: true
```

#### Constraints:

- `1 <= s.length <= 104`
- `s` consists of parentheses only `'()[]{}'`.

### Code

```java title="java Code"


public boolean isValid(String s) {
	Stack<Character> stack = new Stack<Character>();
	for (char c : s.toCharArray()) {
		if (c == '(')
			stack.push(')');
		else if (c == '{')
			stack.push('}');
		else if (c == '[')
			stack.push(']');
		else if (stack.isEmpty() || stack.pop() != c)
			return false;
	}
	return stack.isEmpty();
}
```
