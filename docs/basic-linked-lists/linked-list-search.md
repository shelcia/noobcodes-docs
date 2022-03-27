---
sidebar_position: 6
---

# Linked List Search

### Problem Statement

Linked List Search

### Code

```jsx title="python code"
# SEARCH ELEMENT ITERATIVE AND RECURSIVE


class linkedListNode:
    def __init__(self, value, nextNode=None):
        self.value = value
        self.nextNode = nextNode


class linkedList:
    def __init__(self, head=None):
        self.head = head

    def insertAtBeggining(self, value):
        node = linkedListNode(value)
        if(self.head is None):
            self.head = node
            return

        node.nextNode = self.head
        self.head = node

    def printList(self):
        currentNode = self.head

        while currentNode is not None:
            print(currentNode.value, '->', end='')
            currentNode = currentNode.nextNode
        print('None')

    def searchItr(self, value):
        if(self.head is None):
            return 'The list is empty'
        pointer = 0
        currentNode = self.head
        while currentNode is not None:
            pointer = pointer + 1
            if(currentNode.value == value):
                return pointer
            currentNode = currentNode.nextNode

        return 'No such element exists !!'

    def searchRec(self, node, value, pointer=0):
        if(node is None):
            return 'No such element found'
        elif(node.value == value):
            return pointer+1
        else:
            return self.searchRec(node.nextNode, value, 1+pointer)

    def searchRecCount(self, value):
        if(self.head is None):
            return 'The list is empty'
        else:
            return self.searchRec(self.head, value)


if __name__ == '__main__':
    node = linkedList()
    print(node.searchRecCount('5'))
    node.insertAtBeggining('3')
    node.insertAtBeggining('5')
    node.insertAtBeggining('7')
    node.insertAtBeggining('9')
    node.printList()
    print('position:', node.searchItr('5'))
    print(node.searchItr(5))
    print('position:', node.searchRecCount('3'))
    print(node.searchRecCount(5))
```

### Output

```jsx title="output"
The list is empty
9 ->7 ->5 ->3 ->None
position: 3
No such element exists !!
position: 4
No such element found
```
