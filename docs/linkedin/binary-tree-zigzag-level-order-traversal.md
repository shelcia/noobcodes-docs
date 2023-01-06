---
sidebar_position: 4
tags: [LinkedIn]
---

# Binary Tree Zigzag Level Order Traversal

### Problem Statement

Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

[Leetcode Link](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/)

#### Example 1:

![alt text](https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg)

```
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]
```

#### Example 2:

```
Input: root = [1]
Output: [[1]]
```

#### Example 3:

```
Input: root = []
Output: []
```

#### Constraints:

- The number of nodes in the tree is in the range [0, 2000].
- -100 <= Node.val <= 100

### Code

```jsx title="Python"
class Solution:
    def zigzagLevelOrder(self, root):
        if not root: return []
        queue = deque([root])
        result, direction = [], 1
        
        while queue:
            level = []
            for i in range(len(queue)):
                node = queue.popleft()
                level.append(node.val)
                if node.left:  queue.append(node.left)
                if node.right: queue.append(node.right)
            result.append(level[::direction])
            direction *= (-1)
        return result
```
