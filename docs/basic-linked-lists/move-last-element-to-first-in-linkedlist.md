---
sidebar_position: 17
---

# Move last element to first in LinkedList

### Problem Statement

Move last element to first in LinkedList

### Code

```python title="Python Code"
# LAST TO FIRST ELEMENT IN LINKEDLIST

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
            print('List is Empty')
            return

        currentNode = self.head

        while currentNode != None:
            print(currentNode.value, '->', end=' ')
            currentNode = currentNode.nextNode

        print('None')

    def lastToFirst(self):

        if(self.head is None):
            print('List is Empty')
            return

        currentNode = self.head
        prevNode = None

        while currentNode.nextNode is not None:

            prevNode = currentNode
            currentNode = currentNode.nextNode

        prevNode.nextNode = None

        self.insertAtBeginning(currentNode.value)


if __name__ == '__main__':

    nodeInstance = linkedList()

    nodeInstance.insertAtBeginning('5')
    nodeInstance.insertAtBeginning('4')
    nodeInstance.insertAtBeginning('3')
    nodeInstance.insertAtBeginning('2')
    nodeInstance.insertAtBeginning('1')

    nodeInstance.printList()

    nodeInstance.lastToFirst()

    nodeInstance.printList()
```

### Output

```log title="output"
1 -> 2 -> 3 -> 4 -> 5 -> None
5 -> 1 -> 2 -> 3 -> 4 -> None
```
