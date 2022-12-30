---
sidebar_position: 21
tags: [amazon, binary tree]
---

# Right View Tree

### Problem Statement

Given a Binary Tree, print Right view of it.
[LeetCode link](https://leetcode.com/problems/binary-tree-right-side-view/)

<!-- <iframe width="768" height="432" src="https://miro.com/app/live-embed/o9J_l7I441E=/?moveToViewport=-2029,-243,992,463" frameBorder="0" scrolling="no" allowFullScreen></iframe> -->

### Code

```python title="Python Code"
class Solution:
    def rightView(root):

        if root is None:
            return [root.value]

        level = []  # leafs
        queue = [root]  # parents
        res = []

        while queue != []:

            for node in queue:
                if node.left:
                    level.append(node.left)
                if node.right:
                    level.append(node.right)

            res.append(node.value)
            queue = level
            level = []  # clear the leaf nodes

        return res
```
