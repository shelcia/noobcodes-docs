---
sidebar_position: 5
tags: [amazon, binary tree]
---

# Bottom View of a Binary Tree

### Problem Statement

Given a Binary Tree, we need to print the bottom view from left to right.
A node x is there in output if x is the bottommost node at its horizontal distance.
Horizontal distance of left child of a node x is equal to horizontal distance of x minus 1,
and that of right child is horizontal distance of x plus 1.

Examples:

                      20
                    /    \
                  8       22
                /   \      \
              5      3      25
                    / \
                  10    14

For the above tree the output should be 5, 10, 3, 14, 25.
If there are multiple bottom-most nodes for a horizontal distance from root,
then print the later one in level traversal. For example, in the below diagram, 3 and 4
are both the bottom-most nodes at horizontal distance 0, we need to print 4.

                      20
                    /    \
                  8       22
                /   \    /   \
              5      3 4     25
                    / \
                  10    14

For the above tree the output should be 5, 10, 4, 14, 25.

### Code

```jsx title="Python Code"
class Node:

    def __init__(self, key):

        self.data = key
        self.hd = 1000000
        self.left = None
        self.right = None

# Method that prints the bottom view.


def bottomView(root):
    if root is None:
        return

    queue = [root]
    level = []
    res = []

    while queue != []:
        for node in queue:
            if node.left:
                level.append(node.left)
            if node.right:
                level.append(node.right)

            if not (node.left and node.right):
                res.append(node.data)

        queue = level
        level = []

    print(res)  # 5, 10, 4, 14, 25


# Driver Code
if __name__ == '__main__':

    root = Node(20)
    root.left = Node(8)
    root.right = Node(22)
    root.left.left = Node(5)
    root.left.right = Node(3)
    root.right.left = Node(4)
    root.right.right = Node(25)
    root.left.right.left = Node(10)
    root.left.right.right = Node(14)

    print("Bottom view of the given binary tree :")

    bottomView(root)
```
