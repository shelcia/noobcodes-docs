---
sidebar_position: 15
---

# Remove Duplicates from Sorted LinkedList

### Problem Statement

Remove Duplicates from Sorted LinkedList

### Code

```python title="Python Code"
# REMOVE DUPLICATES FROM SORTED ARRAY

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

    def removeDuplicates(self):

        if(self.head == None):
            print('List is Empty')
            return

        currentNode = self.head
        prevNode = self.head

        while currentNode is not None:

            if(currentNode.value == prevNode.value):
                prevNode.nextNode = currentNode.nextNode

            else:
                prevNode = currentNode

            currentNode = currentNode.nextNode


if __name__ == '__main__':

    nodeInstance = linkedList()

    nodeInstance.insertAtBeginning('11')
    nodeInstance.insertAtBeginning('11')
    nodeInstance.insertAtBeginning('11')
    nodeInstance.insertAtBeginning('23')
    nodeInstance.insertAtBeginning('44')
    nodeInstance.insertAtBeginning('44')
    nodeInstance.insertAtBeginning('56')

    nodeInstance.printList()

    nodeInstance.removeDuplicates()

    nodeInstance.printList()
```

### Output

```log title="output"
56 -> 44 -> 44 -> 23 -> 11 -> 11 -> 11 -> None
56 -> 44 -> 23 -> 11 -> None
```
