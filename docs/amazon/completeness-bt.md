---
sidebar_position: 9
tags: [amazon, binary tree]
---

# Completeness of Binary Tree

### Problem Statement

Check whether a given Binary Tree is Complete or not
[LeetCode link](https://leetcode.com/problems/check-completeness-of-a-binary-tree/)

Given a Binary Tree, write a function to check whether the given Binary Tree is Complete
Binary Tree or not.
A complete binary tree is a binary tree in which every level, except possibly the last, is
completely filled, and all nodes are as far left as possible. See the following examples.

The following trees are examples of Complete Binary Trees

```
     1
   /   \
  2     3

        1
     /    \
    2       3
   /
  4

        1
     /    \
    2      3
   /  \    /
  4    5  6

```

The following trees are examples of Non-Complete Binary Trees

```
     1
       \
        3

        1
     /    \
    2       3
     \     /  \
      4   5    6

        1
     /    \
    2      3
          /  \
         4    5
```

Recommended: Please solve it on “PRACTICE” first, before moving on to the solution.
The method 2 of level order traversal post can be easily modified to check whether a tree is
Complete or not. To understand the approach, let us first define the term ‘Full Node’.
A node is ‘Full Node’ if both left and right children are not empty (or not NULL).

The approach is to do a level order traversal starting from the root. In the traversal,
once a node is found which is NOT a Full Node, all the following nodes must be leaf nodes.

Also, one more thing needs to be checked to handle the below case: If a node has an empty
left child, then the right child must be empty.

```
     1
   /   \
  2     3
   \
    4
```

### Code

```jsx title="Python Code"

class Node:

    # Constructor to create a new node
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None


def isCompleteBT(root):
    # print(root)

    queue = [root]
    level = []

    while queue != []:
        for node in queue:
            if node.left:
                level.append(node.left)
            if node.right:
                level.append(node.right)
            if node.left is None and node.right:
                return False
            if node.left is not None and node.right is None and node != queue(len(queue) - 1):
                return False

        queue = level
        level = []

    return True


# Driver program to test above function
""" Let us construct the following Binary Tree which
      is not a complete Binary Tree
            1
          /   \
         2     3
        / \     \
       4   5     6
    """
root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)
root.right.left = Node(6)

# [1,2,3,5,null,7,8] => edge case

if (isCompleteBT(root)):
    print("Complete Binary Tree")
else:
    print("NOT Complete Binary Tree")

```
