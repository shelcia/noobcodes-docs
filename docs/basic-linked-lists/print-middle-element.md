---
sidebar_position: 8
---

# Print Middle Element

### Problem Statement

Print Middle Element

### Code

```jsx title="Python Code"
# PRINT MIDDLE ELEMENT USING DOUBLE POINTER METHOD

class linkedListNode:
    def __init__(self, value, nextNode=None):
        self.value = value
        self.nextNode = nextNode


class LinkedList:
    def __init__(self, head=None):
        self.head = head

    def insertAtBeginning(self, value):
        node = linkedListNode(value)

        if(self.head == None):
            self.head = node
            return

        node.nextNode = self.head
        self.head = node

    def printList(self):

        if(self.head == None):
            print('List is Empty')
            return

        currentNode = self.head

        while currentNode != None:
            print(currentNode.value, '->', end='')
            currentNode = currentNode.nextNode

        print('None')

#FAST PTR MOVIES TWICE THE SLOW POINTER

    def printMiddle(self):
        slowRunner = self.head
        fastRunner = self.head
        check = True

        while fastRunner != None:

            fastRunner = fastRunner.nextNode
            check = not check
            if check:
                slowRunner = slowRunner.nextNode

        print(slowRunner.value)


if __name__ == '__main__':

    nodeInstance = LinkedList()
    nodeInstance.insertAtBeginning('5')
    nodeInstance.insertAtBeginning('4')
    nodeInstance.insertAtBeginning('3')
    nodeInstance.insertAtBeginning('2')
    nodeInstance.insertAtBeginning('1')
    nodeInstance.printList()
    nodeInstance.printMiddle()
    nodeInstance.insertAtBeginning('0')
    nodeInstance.printMiddle()
```

### Output

```jsx title="output"
1 ->2 ->3 ->4 ->5 ->None
3
3
```
