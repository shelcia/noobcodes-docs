---
sidebar_position: 26
tags: [microsoft]
---

# Recover Binary Search Tree

### Problem Statement
You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.
#### Example 1:

```
Input: root = [1,3,null,null,2]
Output: [3,1,null,null,2]
Explanation: 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid.
```

#### Example 2:

```
Input: root = [3,1,4,null,null,2]
Output: [2,1,4,null,null,3]
Explanation: 2 cannot be in the right subtree of 3 because 2 < 3. Swapping 2 and 3 makes the BST valid.
```




#### Constraints:

- The number of nodes in the tree is in the range [2, 1000].
- -2^31 <= Node.val <= 2^31 - 1


### Code

```python title="Python Code"
class Solution:
    def recoverTree(self, root: TreeNode) -> None:
        self.temp=[]
        def dfs(node):
            if not node:return 
            dfs(node.left)
            self.temp.append(node)
            dfs(node.right)
        dfs(root)
        srt=sorted(n.val for n in self.temp)
        for i in range(len(srt)):
            self.temp[i].val = srt[i]
```
