---
sidebar_position: 27
tags: [airbnb]
---

# Lowest Common Ancestor of a Binary Tree

### Problem Statement

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the [definition of LCA on Wikipedia](https://en.wikipedia.org/wiki/Lowest_common_ancestor): “The lowest common ancestor is defined between two nodes `p` and `q` as the lowest node in `T` that has both `p` and `q` as descendants (where we allow **a node to be a descendant of itself**).”

[Leetcode Link](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)

#### Example 1:

![alt text](https://assets.leetcode.com/uploads/2018/12/14/binarytree.png)

```
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.
```

#### Example 2:

![alt text](https://assets.leetcode.com/uploads/2018/12/14/binarytree.png)

```
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
```

#### Example 3:

```
Input: root = [1,2], p = 1, q = 2
Output: 1
```

#### Constraints:

- The number of nodes in the tree is in the range [2, 10<sup>5</sup>].
- -10<sup>9</sup> <= Node.val <= 10<sup>9</sup>
- All Node.val are unique.
- p != q
- p and q will exist in the tree.

### Code

```python title="Python"
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def lowestCommonAncestor(self, root, p, q):
        def preOrderTraverse(root, p, q):
            # Return the current node if it is equal to either p or q
            if root == p or root == q:
                return root

            # Recurse on the left and right subtrees
            left = preOrderTraverse(root.left, p, q) if root.left else None
            right = preOrderTraverse(root.right, p, q) if root.right else None

            # If the current node is the LCA, return it
            if left and right:
                return root

            # Otherwise, return the non-null node
            return left or right
        # Traverse the tree in pre-order and return the first node that is equal to either p or q, which will be the LCA if it exists
        return preOrderTraverse(root, p, q)
```
