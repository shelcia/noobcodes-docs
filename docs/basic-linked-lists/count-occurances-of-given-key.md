---
sidebar_position: 9
---

# Count Occurances of given key

### Problem Statement

Count Occurances of given key

### Code

```jsx title="python code"
# COUNT OCCURANCES OF GIVEN INTEGER IN LINKED LIST

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

    def count(self, key):
        if(self.head is None):
            return 0

        currentNode = self.head
        count = 0
        while currentNode is not None:
            if(currentNode.value == key):
                count += 1
            currentNode = currentNode.nextNode

        if(count == 0):
            return 'Not found'

        return count


if __name__ == '__main__':
    nodeInstance = linkedList()

    nodeInstance.insertAtBeginning('5')
    nodeInstance.insertAtBeginning('4')
    nodeInstance.insertAtBeginning('5')
    nodeInstance.insertAtBeginning('5')
    nodeInstance.insertAtBeginning('2')
    nodeInstance.insertAtBeginning('4')
    nodeInstance.printList()
    print('Count for 5', nodeInstance.count('5'))
    print('Count for 4', nodeInstance.count('4'))
    print('Count for 1', nodeInstance.count('1'))
```

### Output

```jsx title="output"
4 -> 2 -> 5 -> 5 -> 4 -> 5 -> None
Count for 5 3
Count for 4 2
Count for 1 Not found
```
