---
sidebar_position: 10
---

# Detecting Loop

### Problem Statement

Detecting Loop

### Code

```jsx title="Python Code"
# DETECT LOOP


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
            print('List is empty')
            return

        currentNode = self.head

        while currentNode is not None:
            print(currentNode.value, '-> ', end='')
            currentNode = currentNode.nextNode

        print('None')

    def detectLoop(self):

        hashTable = set()
        currentNode = self.head

        while currentNode is not None:

            if(currentNode in hashTable):
                return True

            hashTable.add(currentNode)
            currentNode = currentNode.nextNode

        return False


if __name__ == '__main__':
    nodeInstance = linkedList()

    nodeInstance.insertAtBeginning('5')
    nodeInstance.insertAtBeginning('4')
    nodeInstance.insertAtBeginning('5')
    nodeInstance.insertAtBeginning('5')
    nodeInstance.insertAtBeginning('2')
    nodeInstance.insertAtBeginning('4')

    nodeInstance.printList()

    print(nodeInstance.detectLoop())

    nodeInstance.head.nextNode.nextNode.nextNode.nextNode = nodeInstance.head
    # nodeInstance.printList()  #BETTER TO BE COMMENTED OUT AS NOW IT IS IN LOOP IT IS GONNA PRINT FOREVER

    print(nodeInstance.detectLoop())
```

### Output

```jsx title="output"
4 -> 2 -> 5 -> 5 -> 4 -> 5 -> None
False
True
```
