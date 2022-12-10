---
sidebar_position: 3
tags: [amazon, binary tree]
---

# All Nodes in Two Binary Search Trees to be Printed

### Problem Statement

Print All Nodes in Two Binary Search Trees

Given two binary search trees root1 and root2.

Return a list containing all the integers from both trees sorted in ascending order.
[LeetCode link](https://leetcode.com/problems/all-elements-in-two-binary-search-trees/)

#### Example 1:

```
Input: root1 = [2,1,4], root2 = [1,0,3]
Output: [0,1,1,2,3,4]
Example 2:

Input: root1 = [0,-10,10], root2 = [5,1,7,0,2]
Output: [-10,0,0,1,2,5,7,10]
Example 3:

Input: root1 = [], root2 = [5,1,7,0,2]
Output: [0,1,2,5,7]
Example 4:

Input: root1 = [0,-10,10], root2 = []
Output: [-10,0,10]
Example 5:

Input: root1 = [1,null,8], root2 = [8,1]
Output: [1,1,8,8]

Constraints:

Each tree has at most 5000 nodes.
Each node's value is between [-10^5, 10^5].

```

### Code

```python title="Python Code"
class newNode:
    def __init__(self, val):
        self.val = val
        self.left = self.right = None


def insert(node, key):

    # If the tree is empty, return a new Node
    if node == None:
        return newNode(key)

    # Otherwise, recur down the tree
    if key < node.val:
        node.left = insert(node.left, key)
    elif key > node.val:
        node.right = insert(node.right, key)

    # return the (unchanged) Node pointer
    return node


def getInorder(node):
    if node is None:
        return []
    return getInorder(node.left) + [node.val] + getInorder(node.right)


def sortArray(arr1, arr2):

    i = j = 0
    arr = []

    while True:
        if i == len(arr1):
            break
        if j == len(arr2):
            break

        if arr1[i] > arr2[j]:
            arr.append(arr2[j])
            j += 1
        else:
            arr.append(arr1[i])
            i += 1

    while j != len(arr2):
        arr.append(arr2[j])
        j += 1

    while i != len(arr1):
        arr.append(arr1[i])
        i += 1

    return arr


def getAllElements(root1, root2):

    if root1 is not None:
        firstInorder = getInorder(root1)
    if root1 is not None:
        secondInorder = getInorder(root2)

    return sortArray(firstInorder, secondInorder)


if __name__ == '__main__':

    # Create first tree as shown in example
    root1 = None
    root1 = insert(root1, 5)
    val1 = insert(root1, 1)
    val1 = insert(root1, 10)
    val1 = insert(root1, 0)
    val1 = insert(root1, 4)
    val1 = insert(root1, 7)
    val1 = insert(root1, 9)

    # Create second tree as shown in example
    root2 = None
    root2 = insert(root2, 10)
    val1 = insert(root2, 7)
    val1 = insert(root2, 20)
    val1 = insert(root2, 4)
    val1 = insert(root2, 9)

    print('All Nodes: ', getAllElements(root1, root2))
```
