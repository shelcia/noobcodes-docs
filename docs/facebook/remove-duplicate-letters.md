---
sidebar_position: 107
tags: [facebook]
---

# Remove Duplicate Letters

### Problem Statement

Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is
the smallest in lexicographical order among all possible results.

[Leetcode link](https://leetcode.com/problems/remove-duplicate-letters/)

#### Example 1:

```
Input: s = "bcabc"
Output: "abc"
```

#### Example 2:

```
Input: s = "cbacdcbc"
Output: "acdb"
```

#### Constraints:

- 1 <= s.length <= 10<sup>4</sup>
- s consists of lowercase English letters.

### Code

```python title="Python Code"
class Solution:
    def removeDuplicateLetters(self, s: str) -> str:

		last_occ = {}
		stack = []
		visited = set()

		for i in range(len(s)):
			last_occ[s[i]] = i

		for i in range(len(s)):

			if s[i] not in visited:
				while (stack and stack[-1] > s[i] and last_occ[stack[-1]] > i):
					visited.remove(stack.pop())

				stack.append(s[i])
				visited.add(s[i])

		return ''.join(stack)
```
