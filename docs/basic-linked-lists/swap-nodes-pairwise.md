---
sidebar_position: 16
---

# Swap nodes Pairwise

### Problem Statement

Swap nodes Pairwise

### Code

```jsx title="Python Code"
# SWAP PAIRWISE ELEMENTS

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

    def swapPairwise(self):

        if(self.head is None):
            print('List Empty')
            return

        currentNode = self.head
        next = None
        prevNode = None

        while currentNode != None:

            if(currentNode.nextNode is None):
                break

            next = currentNode.nextNode
            temp = next.value
            next.value = currentNode.value
            currentNode.value = temp

            currentNode = currentNode.nextNode.nextNode


if __name__ == '__main__':

    nodeInstance = linkedList()

    nodeInstance.insertAtBeginning('1')
    nodeInstance.printList()
    nodeInstance.swapPairwise()
    nodeInstance.printList()
    nodeInstance.insertAtBeginning('2')
    nodeInstance.insertAtBeginning('3')
    nodeInstance.insertAtBeginning('4')
    nodeInstance.insertAtBeginning('5')
    nodeInstance.insertAtBeginning('6')
    nodeInstance.printList()
    nodeInstance.swapPairwise()
    nodeInstance.printList()
    nodeInstance.insertAtBeginning('7')
    nodeInstance.printList()
    nodeInstance.swapPairwise()
    nodeInstance.printList()
```

### Output

```jsx title="output"
1 -> None
1 -> None
6 -> 5 -> 4 -> 3 -> 2 -> 1 -> None
5 -> 6 -> 3 -> 4 -> 1 -> 2 -> None
7 -> 5 -> 6 -> 3 -> 4 -> 1 -> 2 -> None
5 -> 7 -> 3 -> 6 -> 1 -> 4 -> 2 -> None
```
