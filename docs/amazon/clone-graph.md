---
sidebar_position: 6
tags: [amazon]
---

# Clone Graph

### Problem Statement

We need to clone the graph

### Code

```jsx title="Python Code"

class Node:
    def __init__(self, val=0, neighbors=None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []


class Solution:
    def cloneGraph(self, node):

        oldToNew = {}

        def cloneNode(node):

            if node in oldToNew:
                return oldToNew[node]

            copy = Node(node.val)
            oldToNew[node] = copy

            for nei in node.neighbors:
                copy.neighbors.append(cloneNode(nei))

            return copy
        return cloneNode(node) if cloneNode(node) else None
```
