---
sidebar_position: 3
---

# Linked List Deletion

### Problem Statement

Linked List Deletion

### Code

```jsx title="python code"
# DELETING LINKEDLIST AT END BEGINNING, MIDDLE AND AT GIVEN POSITION VALUE

class linkedListNode:
    def __init__(self, value, nextNode=None):
        self.value = value
        self.nextNode = nextNode


class linkedList:
    def __init__(self, head=None):
        self.head = head

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

    def printList(self):
        currentNode = self.head
        while currentNode is not None:
            print(currentNode.value, '->', end='')
            currentNode = currentNode.nextNode
        print('None')

    def delAtBeginning(self):
        if(self.head is None):
            print('LinkedList is Empty')

        currentNode = self.head
        self.head = currentNode.nextNode
        currentNode = None

    def delAtEnd(self):
        if(self.head is None):
            print('Linked List is Empty')

        currentNode = self.head
        while True:
            if(currentNode.nextNode is None):
                break
            prevNode = currentNode
            currentNode = currentNode.nextNode
        prevNode.nextNode = None
        currentNode = None

    def delForValue(self, value):

        currentNode = self.head
        while currentNode.value is not value:
            if(currentNode is None):
                print('There is not value existing !!')
            prevNode = currentNode
            currentNode = currentNode.nextNode

        prevNode.nextNode = currentNode.nextNode
        currentNode = None


if __name__ == '__main__':

    node = linkedList()
    node.insertAtEnd('3')
    node.printList()
    node.insertAtEnd('5')
    node.printList()
    node.insertAtEnd('7')
    node.printList()
    node.insertAtEnd('9')
    node.printList()
    node.insertAtEnd('11')
    node.printList()
    node.delAtBeginning()
    node.printList()
    node.delAtEnd()
    node.printList()
    node.delForValue('7')
    node.printList()
```

### Output

```jsx title="output"
3 ->None
3 ->5 ->None
3 ->5 ->7 ->None
3 ->5 ->7 ->9 ->None
3 ->5 ->7 ->9 ->11 ->None
5 ->7 ->9 ->11 ->None
5 ->7 ->9 ->None
5 ->9 ->None
```
