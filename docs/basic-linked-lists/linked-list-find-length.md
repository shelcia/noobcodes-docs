---
sidebar_position: 5
---

# Linked List Find Length

### Problem Statement

Linked List Find Length

### Code

```jsx title="python code"
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
        print('Empty List')
        return
    currentNode = self.head
    while (currentNode is not None):
        print(currentNode.value, '->', end='')
        currentNode = currentNode.nextNode
    print('None')

def findLenItr(self):
    if(self.head is None):
        print('Empty List')
        return 0
    count = 0
    currentNode = self.head
    while(currentNode is not None):
        count = count + 1
        currentNode = currentNode.nextNode
    return count

def findLenRec(self, node):
    if (not node):  # Base case
        return 0
    else:
        return 1 + self.findLenRec(node.nextNode)

def findLenRecCount(self):
    return self.findLenRec(self.head)


if __name__ == '__main__':
node = linkedList()
node.insertAtBeginning('3')
node.insertAtBeginning('5')
node.insertAtBeginning('7')
node.insertAtBeginning('9')
node.printList()
print(node.findLenItr())
print(node.findLenRecCount())
```

### Output

```jsx title="output"
9 ->7 ->5 ->3 ->None
4
4
```
