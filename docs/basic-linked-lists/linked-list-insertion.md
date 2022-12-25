---
sidebar_position: 2
---

# Linked List Insertion

### Problem Statement

Linked List Insertion

### Code

```python title="Python Code"
# INSERTION OF NODE AT END , BEGGINING AND AT GIVEN POS VALUE

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

    def insertAtEnd(self, value):
        node = linkedListNode(value)
        if(self.head is None):
            self.head = node
            return
        currentNode = self.head
        while True:
            if(currentNode.nextNode is None):
                currentNode.nextNode = node
                break
            currentNode = currentNode.nextNode

    def insertAtBeginning(self, value):
        node = linkedListNode(value)
        if(self.head is None):
            self.head = node
            return
        node.nextNode = self.head
        self.head = node

    def insertAtPos(self, value, prev_value):
        node = linkedListNode(value)
        if(self.head is None):
            self.head = node
            return

        currentNode = self.head
        while currentNode.value is not prev_value:
            if(currentNode.nextNode is None):
                print('Node not found')
                break
            prevNode = currentNode
            currentNode = currentNode.nextNode

        prevNode.nextNode = node
        node.nextNode = currentNode


if __name__ == '__main__':

    nodeCreation = linkedList()
    nodeCreation.insertAtEnd('3')
    nodeCreation.printList()
    nodeCreation.insertAtEnd('5')
    nodeCreation.printList()
    nodeCreation.insertAtEnd('9')
    nodeCreation.printList()
    nodeCreation.insertAtBeginning('1')
    nodeCreation.printList()
    nodeCreation.insertAtPos('7', '9')
    nodeCreation.printList()
    nodeCreation.insertAtPos('7', '8')
    nodeCreation.printList()
```

### Output

```log title="output"
3 ->None
3 ->5 ->None
3 ->5 ->9 ->None
1 ->3 ->5 ->9 ->None
1 ->3 ->5 ->7 ->9 ->None
Node not found
1 ->3 ->5 ->7 ->7 ->9 ->None
```
