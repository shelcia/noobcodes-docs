---
sidebar_position: 4
---

# Linked List Deletion at given Position

### Problem Statement

Linked List Deletion at given Position

### Code

```jsx title="python code"
# DELETE AT MIDDLE AND GIVEN POSITION
  # FAST RUNNER AND SLOW RUNNER FOR MIDDLE DELETION


  class linkedListNode:
      def __init__(self, value, nextNode=None):
          self.value = value
          self.nextNode = nextNode


  class linkedList:
      def __init__(self, head=None):
          self.head = head

      def printList(self):
          if(self.head is None):
              print('List is Empty')
              return
          currentNode = self.head
          while True:
              if(currentNode is None):
                  print('None')
                  break
              print(currentNode.value, '->', end='')
              currentNode = currentNode.nextNode

      def insertAtEnd(self, value):
          node = linkedListNode(value)
          if(self.head is None):
              self.head = node
              return
          currentNode = self.head
          while True:
              if(currentNode.nextNode is None):
                  currentNode.nextNode = node
                  break
              currentNode = currentNode.nextNode

      def delAtPos(self, pos):
          if(self.head is None):
              print('List is Empty')
              return
          pointer = 0
          currentNode = self.head
          while True:
              if(pointer == pos-1):
                  prevNode.nextNode = currentNode.nextNode
                  currentNode = None
                  break
              prevNode = currentNode
              currentNode = currentNode.nextNode
              pointer = pointer + 1
              if(currentNode is None):
                  print('Position not Found')
                  break

      def delAtMiddle(self):
          if(self.head is None):
              print('List is Empty')
              return
          fastRunner = self.head
          slowRunner = self.head
          tick = False
          while fastRunner:
              fastRunner = fastRunner.nextNode
              if tick:
                  prevNode = slowRunner
                  slowRunner = slowRunner.nextNode
              tick = not tick
          prevNode.nextNode = slowRunner.nextNode
          slowRunner = None


  if __name__ == '__main__':

      node = linkedList()
      node.insertAtEnd('4')
      node.printList()
      node.insertAtEnd('5')
      node.printList()
      node.insertAtEnd('9')
      node.printList()
      node.delAtPos(2)
      node.printList()
      node.delAtPos(4)
      node.printList()
      node.insertAtEnd('89')
      node.printList()
      node.insertAtEnd('93')
      node.printList()
      node.insertAtEnd('55')
      node.printList()
      node.delAtMiddle()
      node.printList()
```

### Output

```jsx title="output"
4 ->None
4 ->5 ->None
4 ->5 ->9 ->None
4 ->9 ->None
Position not Found
4 ->9 ->None
4 ->9 ->89 ->None
4 ->9 ->89 ->93 ->None
4 ->9 ->89 ->93 ->55 ->None
4 ->9 ->93 ->55 ->None
```
