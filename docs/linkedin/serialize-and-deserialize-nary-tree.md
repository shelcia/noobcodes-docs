---
sidebar_position: 77
tags: [linkedin]
---

# Serialize and Deserialize N-ary Tree

### Problem Statement

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize an N-ary tree. An N-ary tree is a rooted tree in which each node has no more than N children. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that an N-ary tree can be serialized to a string and this string can be deserialized to the original tree structure.

For example, you may serialize the following 3-ary tree

![alt text](https://assets.leetcode.com/uploads/2018/10/12/narytreeexample.png)

as [1 [3[5 6] 2 4]]. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

#### Example 1:

```
Input：{1,3,2,4#2#3,5,6#4#5#6}
Output：{1,3,2,4#2#3,5,6#4#5#6}
Explanation：Pictured above
```

#### Example 2:

```
Input：{1,3,2#2#3}
Output：{1,3,2#2#3}
Explanation：
          1
	 / \
	3   2
```

[Leetcode Link](https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/)

### Code

```python title="Python"
"""
Definition for a directed graph node
class DirectedGraphNode:
    def __init__(self, x):
        self.label = x
        self.neighbors = []
"""


class Solution:
    def __init__(self) :
        self.pos = 1
    def dfs(self,root) :
        ans = ""
        if root is None:
            return ans
        ans += "["
        ans += str(root.label)
        leng = len(root.neighbors)
        for i in range(leng) :
                ans += self.dfs(root.neighbors[i])
        ans += "]"
        return ans
    def solve(self,data) :
        num = 0
        while ord(data[self.pos]) >= ord('0') and ord(data[self.pos]) <= ord('9') :
            num *= 10
            num += ord(data[self.pos]) - ord('0')
            self.pos += 1
        node = UndirectedGraphNode(num)
        while self.pos < len(data) :
            if data[self.pos] == '[' :
                self.pos += 1
                node.neighbors.append(self.solve(data));
            elif data[self.pos] == ']' :
                self.pos += 1
                return node
    def serialize(self, nodes):
        ans = ""
        if nodes is None:
            return ans
        return self.dfs(nodes[0])
    def deserialize(self, data):
        if len(data) == 0:
            return None
        return self.solve(data)
```
