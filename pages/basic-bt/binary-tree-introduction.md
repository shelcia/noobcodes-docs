---
sidebar_position: 1
---

# Binary Tree Introduction

### Problem Statement

Binary Tree Introduction

### Code

```python title="Python Code"
# BINARY TREE INTRODUCTION


class binaryTreeNode:

    def __init__(self, value, left=None, right=None):

        self.value = value
        self.left = left
        self.right = right


class binaryTree:

    # PREORDER --> ROOT, LEFT, RIGHT
    # EXPECTED OP 1 2 4 5 3 6

    def preOrder(self, root):
        if(root is None):
            return []
        return [root.value] + self.preOrder(root.left) + self.preOrder(root.right)

    # INORDER --> LEFT, ROOT, RIGHT
    # EXPECT OP 4 2 5 1 6 3

    def inOrder(self, root):
        if(root is None):
            return []
        return self.inOrder(root.left) + [root.value] + self.inOrder(root.right)

    # POSTORDER --> LEFT, RIGHT, ROOT
    # EXPECT OP 4 5 2 3 6 1

    def postOrder(self, root):
        if(root is None):
            return []
        return self.postOrder(root.left) + self.postOrder(root.right) + [root.value]


if __name__ == '__main__':

    node1 = binaryTreeNode('1')
    node2 = binaryTreeNode('2')
    node3 = binaryTreeNode('3')
    node4 = binaryTreeNode('4')
    node5 = binaryTreeNode('5')
    node6 = binaryTreeNode('6')

    root = node1
    node1.left = node2
    node1.right = node3
    node1.left.left = node4
    node1.left.right = node5
    node1.right.left = node6

    nodeInstance = binaryTree()

    print(nodeInstance.preOrder(node1))
    print(nodeInstance.inOrder(node1))
    print(nodeInstance.postOrder(node1))
```

### Output

```
["1", "2", "4", "5", "3", "6"][("4", "2", "5", "1", "6", "3")][
  ("4", "5", "2", "6", "3", "1")
];
```
