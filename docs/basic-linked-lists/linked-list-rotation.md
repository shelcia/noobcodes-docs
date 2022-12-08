---
sidebar_position: 18
---

# Linked List Rotation

### Problem Statement

Linked List Rotation
[LeetCode link](https://leetcode.com/problems/rotate-list/)

### Code

```jsx title="Python Code"
class linkedListNode:
    def __init__(self, value, nextNode=None):
        self.value = value
        self.nextNode = nextNode


class linkedList:

    def __init__(self, head=None):
        self.head = head

    def printList(self):
        currentNode = self.head
        while currentNode is not None:
            print(currentNode.value, '->', end='')
            currentNode = currentNode.nextNode
        print('None')

    def insertAtBeginning(self, value):
        node = linkedListNode(value)
        if(self.head is None):
            self.head = node
            return
        node.nextNode = self.head
        self.head = node

    def shiftLinkedList(self, k):

        for i in range(0, k):
            self.rotation()

    def rotation(self):

        currentNode = self.head
        prevNode = None

        while True:
            if(currentNode.nextNode is None):
                break
            prevNode = currentNode
            currentNode = currentNode.nextNode

        temp = linkedListNode(currentNode.value)
        prevNode.nextNode = None
        currentNode = None

        temp.nextNode = self.head
        self.head = temp


if __name__ == '__main__':

    nodeCreation = linkedList()
    nodeCreation.insertAtBeginning('1')
    nodeCreation.insertAtBeginning('2')
    nodeCreation.insertAtBeginning('3')
    nodeCreation.insertAtBeginning('4')
    nodeCreation.insertAtBeginning('5')
    nodeCreation.insertAtBeginning('6')
    nodeCreation.printList()
    nodeCreation.shiftLinkedList(2)
    nodeCreation.printList()
    nodeCreation.shiftLinkedList(0)
    nodeCreation.printList()
```

### Output

```jsx title="output"
6 ->5 ->4 ->3 ->2 ->1 ->None
2 ->1 ->6 ->5 ->4 ->3 ->None
2 ->1 ->6 ->5 ->4 ->3 ->None
```
