---
sidebar_position: 34
tags: [facebook]
---

# Minimum Time to Collect All Apples in a Tree

### Problem Statement

Given an undirected tree consisting of n vertices numbered from 0 to n-1, which has some apples in their vertices. You spend 1 second to walk over one edge of the tree. Return the minimum time in seconds you have to spend to collect all apples in the tree, starting at vertex 0 and coming back to this vertex.

The edges of the undirected tree are given in the array edges, where edges[i] = [ai, bi] means that exists an edge connecting the vertices ai and bi. Additionally, there is a boolean array hasApple, where hasApple[i] = true means that vertex i has an apple; otherwise, it does not have any apple.

[Leetcode link](https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree)

#### Example 1:

```
Input: n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,true,true,false]
Output: 8
Explanation: The figure above represents the given tree where red vertices have an apple. One optimal path to collect all apples is shown by the green arrows
```

#### Example 2:

```
Input: n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,false,true,false]
Output: 6
Explanation: The figure above represents the given tree where red vertices have an apple. One optimal path to collect all apples is shown by the green arrows.
```

#### Example 3:

```
Input: n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,false,false,false,false,false]
Output: 0
```

#### Constraints:

- 1 <= n <= 10<sup>5</sup>
- edges.length == n - 1
- edges[i].length == 2
- 0 <= a<sub>i</sub> < b<sub>i</sub> <= n - 1
- from<sub>i</sub> < to<sub>i</sub>
- hasApple.length == n

### Code

```python title="Python Code"
class Solution:
    def minTime(self, n: int, edges: List[List[int]], hasApple: List[bool]) -> int:
        tree = [[] for _ in range(n)]
        for f, t in edges:
            tree[f].append(t)
            tree[t].append(f)

		# Return a the number of steps to reach all apples and come back
        # to the current node. Return 0 if no apples found.
        def dfs(parent, node):
            steps = 0
            for c in tree[node]:
                if c != parent:
                    steps += dfs(node, c)
            if (hasApple[node] or steps > 0) and node != 0:
                steps += 2
            return steps
        return dfs(-1, 0)

```
