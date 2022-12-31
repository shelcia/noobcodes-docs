---
sidebar_position: 1
---

# Linked List Intro

### Problem Statement

Linked List Intro

### Code

```python title="Python Code"
# CREATING LINKED LIST
# 1.VALUE
# 2.NEXT NODE


class linkedListNode:
    def __init__(self, value, nextNode=None):
        self.value = value
        self.nextNode = nextNode


class linkedList:
    # FUNCTION TO PRINT THE LINKED LIST
    def printList(self, node1):
        currentNode = node1
        while True:
            print(currentNode.value, '->', end='')
            if(currentNode.nextNode is None):
                print('None')
                break
            currentNode = currentNode.nextNode


# DRIVER FUNCTION

if __name__ == '__main__':

    node1 = linkedListNode('2')
    node2 = linkedListNode('11')
    node3 = linkedListNode('1999')

    node1.nextNode = node2
    node2.nextNode = node3
    node3.nextNode = None

    printList = linkedList()  # CREATE INSTANCE
    printList.printList(node1)  # CALL THE FUNCTION
```

### Output

```log title="output"
2 ->11 ->1999 ->None
```
