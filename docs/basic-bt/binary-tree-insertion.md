---
sidebar_position: 2
---

# Binary Tree Insertion

### Problem Statement

Binary Tree Insertion

### Code

```python title="Python Code"
# BINARY TREE INSERTIONS

class binaryTreeNode:

    def __init__(self, value, left=None, right=None):

        self.value = value
        self.left = left
        self.right = right


class binaryTree:

    def __init__(self, root=None):
        self.root = root

    def _insertNode(self, node, value):

        if value < node.value:
            if node.left is None:
                node.left = binaryTreeNode(value)
            else:
                self._insertNode(node.left, value)

        elif value > node.value:
            if node.right is None:
                node.right = binaryTreeNode(value)
            else:
                self._insertNode(node.right, value)

    def insertNode(self, value):

        node = binaryTreeNode(value)

        if(self.root is None):
            self.root = node
        else:
            self._insertNode(self.root, value)

    def inorderTraversal(self, currentNode):

        if(currentNode is None):
            return []

        return self.inorderTraversal(currentNode.left) + [currentNode.value] + self.inorderTraversal(currentNode.right)

    def printBinaryTree(self):

        return self.inorderTraversal(self.root)


if __name__ == "__main__":

    nodeInstance = binaryTree()

    nodeInstance.insertNode('1')
    nodeInstance.insertNode('5')
    nodeInstance.insertNode('6')
    nodeInstance.insertNode('11')
    nodeInstance.insertNode('7')

    print(nodeInstance.printBinaryTree())
```

### Output

```log title="output"
["1", "11", "5", "6", "7"];
```
