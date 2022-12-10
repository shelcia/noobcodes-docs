---
sidebar_position: 17
tags: [amazon, binary tree]
---

# Mirror Binary Tree

### Problem Statement

Given two Binary Trees, write a function that returns true if two trees are
mirror of each other, else false.

<!-- <iframe width="768" height="432" src="https://miro.com/app/live-embed/o9J_l7I441E=/?moveToViewport=-2029,-243,992,463" frameBorder="0" scrolling="no" allowFullScreen></iframe> -->

### Code

```python title="Python Code"
class Node:

    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


def identicalMirror(firstTreeNode, secondTreeNode):

    if firstTreeNode is None and secondTreeNode is None:
        return True

    if firstTreeNode is not None and secondTreeNode is not None:

        return (firstTreeNode.value == secondTreeNode.value and
                identicalMirror(firstTreeNode.left, secondTreeNode.right) and
                identicalMirror(firstTreeNode.right, secondTreeNode.left))


root1 = Node(1)
root2 = Node(1)

root1.left = Node(2)
root1.right = Node(3)
root1.left.left = Node(4)
root1.left.right = Node(5)

root2.left = Node(3)
root2.right = Node(2)
root2.right.left = Node(5)
root2.right.right = Node(4)


if(identicalMirror(root1, root2)):
    print('Mirror Tree')
else:
    print('Not a Mirror Tree')
```
