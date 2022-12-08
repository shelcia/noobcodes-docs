---
sidebar_position: 1
tags: [microsoft]
---

# Populating Next Right Pointers in Each Node II

### Problem Statement

Given a binary tree
`struct Node {`
  `int val;`
  `Node *left;`
  `Node *right;`
  `Node *next;`
`}`

Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to `NULL`.

Initially, all next pointers are set to `NULL`.

#### Example 1:


![image](https://user-images.githubusercontent.com/75152702/206384027-9c319923-2d9f-4a54-801a-728e9b1f5f13.png)

```
Input: root = [1,2,3,4,5,null,7]
Output: [1,#,2,3,#,4,5,7,#]
Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
```

#### Example 2:



```
Input: root = []
Output: []
```

#### Constraints:

- The number of nodes in the tree is in the range `[0, 6000].`
- `-100 <= Node.val <= 100`

#### Follow-up:

- You may only use constant extra space.
- The recursive approach is fine. You may assume implicit stack space does not count as extra space for this problem.

### Code

```jsx title="Python Code"
"""
def connect(self, node):
    tail = dummy = TreeLinkNode(0)
    while node:
        tail.next = node.left
        if tail.next:
            tail = tail.next
        tail.next = node.right
        if tail.next:
            tail = tail.next
        node = node.next
        if not node:
            tail = dummy
            node = dummy.next
```
