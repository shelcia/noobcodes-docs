---
sidebar_position: 1
---

# Reversed Linked List

### Problem Statement

Given a Linked List, print reverse if it.
[LeetCode link](https://leetcode.com/problems/reverse-linked-list/)

### Code

```jsx title="Python Code"
class linkedListNode:

    def __init__(self, value, nextNode=None):
        self.value = value
        self.nextNode = nextNode


class linkedList:

    def __init__(self, head=None):
        self.head = head

    def insertAtBeginning(self, value):
        node = linkedListNode(value)

        if(self.head is None):
            self.head = node
            return

        node.nextNode = self.head
        self.head = node

    def printList(self):

        if(self.head is None):
            print("List is Empty")
            return

        currentNode = self.head

        while currentNode != None:
            print(currentNode.value, '->', end=' ')
            currentNode = currentNode.nextNode

        print('None')

    def reverseList(self):

        prevNode = None
        currentNode = self.head
        next = None

        while currentNode is not None:
            next = currentNode.nextNode
            currentNode.nextNode = prevNode
            prevNode = currentNode
            currentNode = next

        self.head = prevNode


if __name__ == "__main__":

    nodeInstance = linkedList()

    nodeInstance.insertAtBeginning('5')
    nodeInstance.insertAtBeginning('4')
    nodeInstance.insertAtBeginning('3')
    nodeInstance.insertAtBeginning('2')
    nodeInstance.insertAtBeginning('1')

    nodeInstance.printList()

    nodeInstance.reverseList()

    nodeInstance.printList()
```
