---
sidebar_position: 7
---

# Reverse Alternate nodes

### Problem Statement

Given a linked list, reverse alternate nodes and append at the end

## Walkthrough

### Approach

The idea is to maintain two linked lists, one list of all odd positioned nodes and
other list of all even positioned nodes .
Traverse the given linked list which is considered as an odd list or oddly positioned nodes.
If the node is even node, remove it from the odd list and add it to the front of even node list.
Nodes are added at front to keep the reverse order.
Append the even node list at the end of odd node list.

### Code

```jsx title="python code"
class Node:

    # Constructor to initialize the node object
    def __init__(self, val):
        self.val = val
        self.next = None


def printList(head):

    while head is not None:
        print(head.val, '->', end='')
        head = head.next

    print('None')


def ReverseAltNodes(head):

    oddHead, evenHead = head, head.next
    curOdd, curEven = oddHead,  evenHead

    while oddHead.next is None and curEven.next is None:

        curOdd.next = curEven.next
        curEven.next = curOdd.next

        curOdd = curOdd.next
        curEven = curEven.next

    printList(oddHead)
    printList(evenHead)


if __name__ == '__main__':

    root = Node(1)
    root.next = Node(2)
    root.next.next = Node(3)
    root.next.next.next = Node(4)
    root.next.next.next.next = Node(5)
    root.next.next.next.next.next = Node(6)
    root.next.next.next.next.next.next = Node(7)
    printList(root)
    ReverseAltNodes(root)

```
