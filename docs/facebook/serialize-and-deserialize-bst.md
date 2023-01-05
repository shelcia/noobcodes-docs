---
sidebar_position: 139
tags: [facebook]
---

# Serialize and Deserialize BST

### Problem Statement

Serialization is converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary search tree. There is no restriction on how your serialization/deserialization algorithm should work. You need to ensure that a binary search tree can be serialized to a string, and this string can be deserialized to the original tree structure.

The encoded string should be as compact as possible.

[Leetcode Link](https://leetcode.com/problems/serialize-and-deserialize-bst/)

#### Example 1:

```
Input: root = [2,1,3]
Output: [2,1,3]
```

#### Example 2:

```
Input: root = []
Output: []
```

#### Constraints:

- The number of nodes in the tree is in the range [0, 10<sup>4</sup>].
- 0 <= Node.val <= 10<sup>4</sup>
- The input tree is guaranteed to be a binary search tree.

### Code

```python title="Python"
class Codec:

    def serialize(self, root):
        vals = []

        def preOrder(node):
            if node:
                vals.append(node.val)
                preOrder(node.left)
                preOrder(node.right)

        preOrder(root)

        return ' '.join(map(str, vals))

    # O( N ) since each val run build once
    def deserialize(self, data):
        vals = collections.deque(int(val) for val in data.split())

        def build(minVal, maxVal):
            if vals and minVal < vals[0] < maxVal:
                val = vals.popleft()
                node = TreeNode(val)
                node.left = build(minVal, val)
                node.right = build(val, maxVal)
                return node

        return build(float('-infinity'), float('infinity'))
```