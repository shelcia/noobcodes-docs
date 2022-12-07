---
sidebar_position: 20
tags: [amazon]
---

# Right View Tree

### Problem Statement

Given a Binary Tree, print Right view of it.
[LeetCode link](https://leetcode.com/problems/binary-tree-right-side-view/)

<!-- <iframe width="768" height="432" src="https://miro.com/app/live-embed/o9J_l7I441E=/?moveToViewport=-2029,-243,992,463" frameBorder="0" scrolling="no" allowFullScreen></iframe> -->

### Code

```jsx title="Python Code"
class Node:
    # A constructor to create a new Binary tree Node
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


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


root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)
root.right.left = Node(6)
root.right.right = Node(7)
root.left.left.left = Node(8)

print(rightView(root))
```
