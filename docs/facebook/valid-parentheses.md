---
sidebar_position: 221
tags: [facebook]
---

# Valid Parentheses

### Problem Statement

Given a string `s` containing just the characters `'(', ')'`, `'{', '}'`, `'['` and `']'`, determine if the input string is valid.

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

#### Example 3:

```
Input: s = "(]"
Output: false
```

#### Constraints:

- `1` `<=` `s.length` `<=` 10<sup>4</sup>
- `s` consists of parentheses only `'()[]{}'`.

### Code

```jsx title="Java Code"

class Solution {
    public boolean isValid(String s) {
        char [] arr = s.toCharArray();
	Stack stack = new Stack();
	for(char ch : arr){
		if(stack.isEmpty()){
			stack.push(ch);
		}else{
			char top = (char)stack.lastElement();
			if(ch - top == 1 || ch - top == 2){
				stack.pop();
			}else{
				stack.push(ch);
			}
		}
	}
	if(stack.isEmpty()){
	    return true;
	}
	return false;

    }
}


```
