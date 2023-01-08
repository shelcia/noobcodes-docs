---
sidebar_position: 28
tags: [linkedin]
---

# Graph Valid Tree

### Problem Statement

Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.

#### Example 1:

```
Input: n = 5 edges = [[0, 1], [0, 2], [0, 3], [1, 4]]
Output: true.
```

#### Example 2:

```
Input: n = 5 edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]
Output: false.
```

[Leetcode Link](https://leetcode.com/problems/Graph-Valid-Tree/)

### Code

```python title="Python"
class Solution:
    """
    @param: n: An integer
    @param: edges: a list of undirected edges
    @return: true if it's a valid tree, or false
    """
    def validTree(self, n, edges):
        # write your code here
        if n == 0:
            return False
        if len(edges) != n-1:
            return False
        g = {}
        for e in edges:
            g[e[0]] = g.get(e[0], []) + [e[1]]
            g[e[1]] = g.get(e[1], []) + [e[0]]
        q = [0]
        visited = set([0])
        while q:
            node = q.pop(0)
            for i in g.get(node, []):
                if i in visited:
                    continue
                q.append(i)
                visited.add(i)
        return len(visited) == n

	def validTree(self, n, edges):
        # write your code here
        if n == 0:
            return False
        if len(edges) != n-1:
            return False
        g = {}
        for e in edges:
            g[e[0]] = g.get(e[0], []) + [e[1]]
            g[e[1]] = g.get(e[1], []) + [e[0]]
        q = [0]
        while q:
            q += g.pop(q.pop(0), [])
        return not g
```
