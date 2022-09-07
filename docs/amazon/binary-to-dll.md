---
sidebar_position: 3
tags: [amazon, binary tree, dll, linkedlist]
---

# Binary Tree To DLL

### Problem Statement

Given a Binary Tree (BT), convert it to a Doubly Linked List(DLL) In-Place.
The left and right pointers in nodes are to be used as previous and next pointers respectively.

### Code

```jsx title="Python Code"

class Node:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = left


def inorderTraversal(node):

    if node is None:
        return []
    return inorderTraversal(node.left) + [node] + inorderTraversal(node.right)


class DLL:
    def __init__(self, head=None, tail=None):
        self.head = head
        self.tail = tail

    def convert(self, nodes):

        self.head = nodes[0]

        nodes[0].left = None
        nodes[0].right = nodes[1]

        # currentNode = nodes[1]

        for i in range(1, len(nodes)-1):
            nodes[i].left = nodes[i-1]
            nodes[i].right = nodes[i+1]
            print('node', i, nodes[i].value)

        nodes[i+1].right = None

        self.tail = nodes[i+1]

        return self.head

    def printDLL(self):

        if self.head is None:
            print("empty DLL")
            return

        currentNode = self.head

        while currentNode is not None:
            print(currentNode.value, '<=>', end="")
            currentNode = currentNode.right
        print()


# Driver program to test above functions
if __name__ == "__main__":

    # Let us create the tree as
    # shown in above diagram
    root = Node(10)
    root.left = Node(12)
    root.right = Node(15)
    root.left.left = Node(25)
    root.left.right = Node(30)
    root.right.left = Node(36)

    head = inorderTraversal(root)
    print('head', head)

    dllInstance = DLL()

    headDLL = dllInstance.convert(head)

    dllInstance.printDLL()

```
