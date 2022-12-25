---
sidebar_position: 15
tags: [amazon, binary tree]
---

# Maximum width of a binary tree

### Problem Statement

Given a binary tree, write a function to get the maximum width of the given tree.
Width of a tree is maximum of widths of all levels.

Let us consider the below example tree.

          1
         /  \
        2    3
      /  \     \
     4    5     8
               /  \
              6    7

For the above tree,
width of level 1 is 1,
width of level 2 is 2,
width of level 3 is 3
width of level 4 is 2.
So the maximum width of the tree is 3.

[LeetCode link](https://leetcode.com/problems/maximum-width-of-binary-tree/)

### Code

```python title="Python Code"

class Node:

    # Constructor to create a new node
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


def MaxWidthBT(root):

    if root is None:
        return

    queue = [root]
    level = []
    widths = [1]

    while queue != []:
        for node in queue:
            if node.left:
                level.append(node.left)
            if node.right:
                level.append(node.right)

        widths.append(len(level))
        queue = level
        level = []

    return max(widths)


root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)
root.right.right = Node(8)
root.right.right.left = Node(6)
root.right.right.right = Node(7)
print('Maximum width is ', MaxWidthBT(root))

```
