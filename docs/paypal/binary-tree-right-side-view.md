---
sidebar_position: 6
tags: [paypal, tree, depth-first search, breadth-first search, binary tree]
---

# Binary Tree Right Side View

### Problem Statement

Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

### Examples

```
Example 1:

Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]

Example 2:

Input: root = [1,null,3]
Output: [1,3]

Example 3:

Input: root = []
Output: []
```

### Constraints

```
The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
```

### Code

```jsx title="Python3 Code"

    class Solution:

    result = []

    def get_result(self,root,level):
        if root==None:
            return
        if level==len(self.result):
            self.result.append(root.val)
        self.get_result(root.right,level+1)
        self.get_result(root.left,level+1)

    def rightSideView(self, root: TreeNode) -> List[int]:
        self.result = []
        self.get_result(root,0)
        return self.result
```
