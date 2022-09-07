---
sidebar_position: 12
---

# Finding Palindrome

### Problem Statement

Finding Palindrome

### Code

```jsx title="Python Code"
# 1. METHOD 1 - REVERSE THE LINKEDLIST AND CHECK IF THE ARE EQUAL
# 2. FIND THE MIDDLE ELEMENT AND CHECK IF FIRST HALF EQUALS SECOND HALF

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
        if self.head is None:
            print('list is empty')

        currentNode = self.head
        while currentNode is not None:
            print(currentNode.value, '->', end=' ')
            currentNode = currentNode.nextNode
        print('None')

    def reverseLinkedList(self):

        prevNode = None
        currentNode = self.head
        next = None

        while currentNode is not None:

            next = currentNode.nextNode
            currentNode.nextNode = prevNode
            prevNode = currentNode
            currentNode = next

        self.head = prevNode

    def valuesInLinkedList(self, start, end=None):

        linkedList = []
        currentNode = start

        while currentNode is not end:
            linkedList.append(currentNode.value)
            currentNode = currentNode.nextNode

        return linkedList

    # FIRST METHOD

    def findPalindrome(self):

        firstList = self.valuesInLinkedList(self.head)

        self.reverseLinkedList()

        secondList = self.valuesInLinkedList(self.head)
        self.reverseLinkedList()

        if(firstList == secondList):
            return True
        else:
            return False

    # SECOND METHOD

    def findPalindromeMiddlePtr(self):

        slowRunner = self.head
        fastRunner = self.head
        check = False

        while fastRunner is not None:

            fastRunner = fastRunner.nextNode
            if check:
                slowRunner = slowRunner.nextNode
            check = not check

        firstList = self.valuesInLinkedList(self.head, slowRunner.nextNode)

        secondList = self.valuesInLinkedList(slowRunner)

        if(firstList == secondList):
            return True
        else:
            return False


if __name__ == '__main__':

    nodeInstance = linkedList()

    nodeInstance.insertAtBeginning('1')
    nodeInstance.insertAtBeginning('2')
    nodeInstance.insertAtBeginning('3')
    nodeInstance.insertAtBeginning('2')
    nodeInstance.insertAtBeginning('1')
    nodeInstance.printList()

    print('First Method', end=' ')
    print('Is it Palindrome', nodeInstance.findPalindrome())

    print('Second Method', end=' ')
    print('Is it Palindrome', nodeInstance.findPalindromeMiddlePtr())

    nodeInstance.insertAtBeginning('1')
    nodeInstance.printList()
    print('First Method', end=' ')
    print('Is it Palindrome', nodeInstance.findPalindrome())

    print('Second Method', end=' ')
    print('Is it Palindrome', nodeInstance.findPalindromeMiddlePtr())
```

### Output

```jsx title="output"
1 -> 2 -> 3 -> 2 -> 1 -> None
First Method Is it Palindrome True
Second Method Is it Palindrome False
1 -> 1 -> 2 -> 3 -> 2 -> 1 -> None
First Method Is it Palindrome False
Second Method Is it Palindrome False
```
