---
sidebar_position: 27
tags: [facebook]
---

# Minimum Height Trees

### Problem Statement

A tree is an undirected graph in which any two vertices are connected by exactly one path. In other words, any connected graph without simple cycles is a tree.

Given a tree of n nodes labelled from 0 to n - 1, and an array of n - 1 edges where edges[i] = [ai, bi] indicates that there is an undirected edge between the two nodes ai and bi in the tree, you can choose any node of the tree as the root. When you select a node x as the root, the result tree has height h. Among all possible rooted trees, those with minimum height (i.e. min(h)) are called minimum height trees (MHTs).

Return a list of all MHTs' root labels. You can return the answer in any order.

The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.

[Leetcode link](https://leetcode.com/problems/minimum-height-trees)

#### Example 1:

```
Input: n = 4, edges = [[1,0],[1,2],[1,3]]
Output: [1]
Explanation: As shown, the height of the tree is 1 when the root is the node with label 1 which is the only MHT.
```

#### Example 2:

```
Input: n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
Output: [3,4]
```

#### Constraints:

- 1 <= n <= 2 \* 10<sup>4</sup>
- edges.length == n - 1
- 0 <= a<sub>i</sub>, b<sub>i</sub> < n
- a<sub>i</sub> != b<sub>i</sub>
- All the pairs (a<sub>i</sub>, b<sub>i</sub>) are distinct.
- The given input is guaranteed to be a tree and there will be no repeated edges.

### Code

```python title="Python Code"

class Solution(object):
        def findMinHeightTrees(self, n, edges):

        def makeGraph(E):
            graph = collections.defaultdict(set)
            for e in E:
                graph[e[0]].add(e[1])
                graph[e[1]].add(e[0])
            return graph

        def BFS(start, G):
            parents, visited = {}, set()
            queue = collections.deque([(start, 0, None)])
            V, farthest = None, 0
            while queue:
                v, dist, p = queue.popleft()
                if dist > farthest: farthest, V = dist, v
                visited.add(v)
                parents[v] = p
                for vtx in G[v]:
                    if vtx not in visited: queue.append((vtx, dist+1, v))
            return V, farthest, parents

        if not edges: return [0] if n == 1 else []
        G = makeGraph(edges)
        end, farthest, parents = BFS(BFS(0, G)[0], G)
        vCount = farthest + 1
        target, root, prev = vCount // 2, None, None
        while target > -1:
            root, prev = end, root
            end = parents[end]
            target -= 1
        return [root] if vCount % 2 != 0 else [root, prev]

```
