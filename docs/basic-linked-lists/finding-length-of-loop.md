---
sidebar_position: 11
---

# Finding Length of Loop

### Problem Statement

Finding Length of Loop

### Code

```jsx title="python code"
# FIND LENGTH OF THE LOOP
# USING FLOYDS ALGORITHM

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
        fastRunner = self.head
        slowRunner = self.head
        check = True

        if(self.head is None):
            print('List Empty')
            return

        currentNode = self.head
        while currentNode is not None:
            print(currentNode.value, '->', end='')
            currentNode = currentNode.nextNode
            fastRunner = fastRunner.nextNode
            check = not check
            if(check):
                slowRunner = slowRunner.nextNode

            if(slowRunner == fastRunner):
                print('loop has been detected')
                break
        if(slowRunner != fastRunner):
            print('None')

    def findLength(self):

        slowRunner = self.head
        fastRunner = self.head
        detected = False

        while fastRunner.nextNode is not None:
            # print('p', fastRunner.value, 'q', slowRunner.value)
            fastRunner = fastRunner.nextNode.nextNode
            slowRunner = slowRunner.nextNode

            if(slowRunner == fastRunner):
                detected = not detected
                break

        length = 0

        if(detected):
            slowRunner = self.head

            while slowRunner != fastRunner:
                length += 1
                slowRunner = slowRunner.nextNode
                fastRunner = fastRunner.nextNode

        return length


if __name__ == '__main__':

    nodeInstance = linkedList()

    nodeInstance.insertAtBeginning('1')
    nodeInstance.insertAtBeginning('2')
    nodeInstance.insertAtBeginning('3')
    nodeInstance.insertAtBeginning('4')
    nodeInstance.insertAtBeginning('5')

    print('loop length', nodeInstance.findLength())
    nodeInstance.printList()
    nodeInstance.head.nextNode.nextNode.nextNode.nextNode.nextNode = nodeInstance.head.nextNode.nextNode
    nodeInstance.printList()
    print('loop length', nodeInstance.findLength())
```

### Output

```jsx title="output"
loop length 0
5 ->4 ->3 ->2 ->1 ->None
5 ->4 ->3 ->2 ->1 ->loop has been detected
loop length 2
```
