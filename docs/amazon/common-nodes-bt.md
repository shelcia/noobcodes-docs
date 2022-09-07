---
sidebar_position: 7
tags: [amazon]
---

# Print Common Nodes in Two Binary Search Trees

### Problem Statement

Given two Binary Search Trees, find common nodes in them.
In other words, find intersection of two BSTs.

### Code

```jsx title="Python Code"

class Node:
    def __init__(self, key):
        self.key = key
        self.left = self.right = None


def inorderTraversal(node):

    if node is None:
        return []
    return inorderTraversal(node.left) + [node.key] + inorderTraversal(node.right)


def findCommon(arr1, arr2):

    res = []
    print(arr1, arr2)

    for ele in arr1:
        if ele in arr2:
            res.append(ele)

    return res


if __name__ == '__main__':

    root1 = Node(5)
    root1.left = Node(1)
    root1.right = Node(10)
    root1.left.left = Node(0)
    root1.left.right = Node(4)
    root1.right.left = Node(7)
    root1.right.right = Node(9)

    root2 = Node(10)
    root2.left = Node(7)
    root2.right = Node(20)
    root2.left.left = Node(4)
    root2.left.right = Node(9)

    firstTree = inorderTraversal(root1)
    secondTree = inorderTraversal(root2)

    print(findCommon(firstTree, secondTree))  # [4, 7, 10, 9]

```
