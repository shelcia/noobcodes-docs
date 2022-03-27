---
sidebar_position: 14
---

# Remove Duplicates in LinkedList

### Problem Statement

Remove Duplicates in LinkedList

### Code

```jsx title="python code"
# REMOVE DUPLICATES

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

        valuesInList = set()
        currentNode = self.head
        prevNode = self.head

        while currentNode is not None:

            if(currentNode.value in valuesInList):
                prevNode.nextNode = currentNode.nextNode

            else:
                valuesInList.add(currentNode.value)
                prevNode = currentNode

            currentNode = currentNode.nextNode


if __name__ == '__main__':

    nodeInstance = linkedList()

    nodeInstance.insertAtBeginning('1')
    nodeInstance.insertAtBeginning('3')
    nodeInstance.insertAtBeginning('2')
    nodeInstance.insertAtBeginning('1')
    nodeInstance.insertAtBeginning('2')
    nodeInstance.insertAtBeginning('1')
    nodeInstance.insertAtBeginning('3')
    nodeInstance.insertAtBeginning('2')
    nodeInstance.insertAtBeginning('1')

    nodeInstance.printList()

    nodeInstance.removeDuplicates()

    nodeInstance.printList()
```

### Output

```jsx title="output"
1 -> 2 -> 3 -> 1 -> 2 -> 1 -> 2 -> 3 -> 1 -> None
1 -> 2 -> 3 -> None
```
