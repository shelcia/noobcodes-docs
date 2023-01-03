---
sidebar_position: 178
tags: [facebook]
---

# Subtree of Another Tree

### Problem Statement

Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

[Leetcode link](https://leetcode.com/problems/subtree-of-another-tree)

### Examples

```
Example 1:

Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true


Example 2:

Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
Output: false
```

### Constraints

- The number of nodes in the root tree is in the range [1, 2000].
- The number of nodes in the subRoot tree is in the range [1, 1000].
- -10<sup>4</sup> <= root.val <= 10<sup>4</sup>
- -10<sup>4</sup> <= subRoot.val <= 10<sup>4</sup>

### Code

```python title="Python3 Code"
from collections import deque, defaultdict

class Solution:
    def isMatch(self, s, t):
    if not(s and t):
        return s is t
    return (s.val == t.val and
            self.isMatch(s.left, t.left) and
            self.isMatch(s.right, t.right))

    def isSubtree(self, s, t):
        if self.isMatch(s, t): return True
        if not s: return False
        return self.isSubtree(s.left, t) or self.isSubtree(s.right, t)
```
