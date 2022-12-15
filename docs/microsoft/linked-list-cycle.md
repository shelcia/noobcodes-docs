---
sidebar_position: 25
tags: [microsoft]
---

# Linked List Cycle

### Problem Statement
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

#### Example 1:

```
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
```

#### Example 2:

```
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
```

### Example 3:

```
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
```


#### Constraints:

- The number of the nodes in the list is in the range [0, 104].
- -10^5 <= Node.val <= 10^5
- pos is -1 or a valid index in the linked-list.

### Code

```python title="Python Code"
class ListNode:
   def __init__(self, data, next = None):
      self.data = data
      self.next = next
def make_list(elements):
   head = ListNode(elements[0])
   for element in elements[1:]:
      ptr = head
      while ptr.next:
         ptr = ptr.next
      ptr.next = ListNode(element)
   return head
def get_node(head, pos):
   if pos != -1:
      p = 0
      ptr = head
      while p < pos:
         ptr = ptr.next
         p += 1
      return ptr
class Solution(object):
   def hasCycle(self, head):
      hashS = set()
      while head:
         if head in hashS:
            return True
         hashS.add(head)
         head = head.next
      return False
head = make_list([5,3,2,0,-4,7])
last_node = get_node(head, 5)
pos = 1
last_node.next = get_node(head, pos)
ob1 = Solution()
print(ob1.hasCycle(head))
```
