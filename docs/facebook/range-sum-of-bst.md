---
sidebar_position: 97
tags: [facebook]
---

# Range Sum of BST

### Problem Statement

Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

[Leetcode Link](https://leetcode.com/problems/range-sum-of-bst)

#### Example 1:

```
Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
Output: 32
Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.
```

#### Example 2:

```
Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
Output: 23
Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.
```

#### Constraints:

- The number of nodes in the tree is in the range [1, 2 * 10<sup>4</sup>].
- 1 <= Node.val <= 10<sup>5</sup>
- 1 <= low <= high <= 10<sup>5</sup>
- All Node.val are unique.

### Code

```python title="Python Code"
import random
class Solution:
    def rangeSumBST(self, root: TreeNode, L: int, R: int) -> int:
        if not root:
            return 0
        elif root.val < L:
            return self.rangeSumBST(root.right, L, R)
        elif root.val > R:
            return self.rangeSumBST(root.left, L, R)
        return root.val + self.rangeSumBST(root.left, L, R) + self.rangeSumBST(root.right, L, R)
```
