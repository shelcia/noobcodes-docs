---
sidebar_position: 12
tags: [amazon]
---

# Diameter of a Binary Tree

### Problem Statement

The diameter of a tree (sometimes called the width) is the number of nodes on the longest path between two end nodes. The diagram below shows two trees each with diameter nine, the leaves that form the ends of the longest path are shaded (note that there is more than one path in each tree of length nine, but no path longer than nine nodes).
[LeetCode link](https://leetcode.com/problems/diameter-of-binary-tree/)

### Code

```jsx title="Python Code"
class Node:

    # Constructor to create a new node
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None


def height(node):

    # Base Case : Tree is empty
    if node is None:
        return 0

    # If tree is not empty then height = 1 + max of left
    # height and right heights
    return 1 + max(height(node.left), height(node.right))


def diameter(node):

    if root is None:
        return 0

    lheight = height(root.left)
    rheight = height(root.right)

    lDia = diameter(node.left)
    rDia = diameter(node.left)

    return max(lheight + rheight + 1, max(lDia, rDia))


root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)

# Function Call
print(diameter(root))
```
