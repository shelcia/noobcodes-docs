---
sidebar_position: 7
---

# Print Nth element from end

### Problem Statement

Print Nth element from end

### Code

```jsx title="Python Code"
# Program for n’th node from the end of a Linked List


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
            print('List Empty')
            return

        currentNode = self.head
        while currentNode is not None:
            print(currentNode.value, '->', end='')
            currentNode = currentNode.nextNode
        print('None')

    def printNElementDec(self, pos):  # O(n)
        if(self.head is None):
            print('List Empty')
            return

        listLength = 0
        currentNode = self.head
        while currentNode is not None:
            listLength = listLength+1
            currentNode = currentNode.nextNode

        if(listLength < 0 or pos > listLength):
            print('Invalid Position Value')
            return

        pointer = 0
        currentNode = self.head
        while currentNode is not None:
            if(pointer == listLength-pos):
                print(currentNode.value)
            pointer = pointer+1
            currentNode = currentNode.nextNode

    def printNElementDoublePointer(self, pos):
        if(self.head is None):
            print('List Empty')
            return

        first_ptr = self.head
        second_ptr = self.head

        # MOVE FIRST POINTER BY POSTION -1 AND INCREEMENT
        # BOTH POINTER TILL IT FIRST POINTER REACHES THE LAST NODE

        count = 0

        while count != pos:
            count = count+1
            if(first_ptr is None):
                return 'Invalid Position Value'
            first_ptr = first_ptr.nextNode

        while first_ptr is not None:
            first_ptr = first_ptr.nextNode
            second_ptr = second_ptr.nextNode

        return second_ptr.value


if __name__ == '__main__':
    nodeInstance = linkedList()

    nodeInstance.insertAtBeginning('1')
    nodeInstance.insertAtBeginning('2')
    nodeInstance.insertAtBeginning('3')
    nodeInstance.insertAtBeginning('4')
    nodeInstance.insertAtBeginning('5')
    nodeInstance.printList()
    nodeInstance.printNElementDec(5)
    nodeInstance.printNElementDec(1)
    nodeInstance.printNElementDec(8)
    print(nodeInstance.printNElementDoublePointer(3))
    print(nodeInstance.printNElementDoublePointer(1))
    print(nodeInstance.printNElementDoublePointer(9))
```

### Output

```jsx title="output"
5 ->4 ->3 ->2 ->1 ->None
5
1
Invalid Position Value
3
1
Invalid Position Value
```
