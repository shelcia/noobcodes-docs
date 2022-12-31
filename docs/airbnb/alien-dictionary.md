---
sidebar_position: 3
tags: [airbnb]
---

#  Alien Dictionary

### Problem Statement

There is a new alien language which uses the latin alphabet. However, the order among letters are unknown to you. You receive a list of **non-empty** words from the dictionary, where words are **sorted lexicographically by the rules of this new language**. Derive the order of letters in this language.

**Note**:

1. You may assume all letters are in lowercase.
2. The dictionary is invalid, if string a is prefix of string b and b is appear before a.
3. If the order is invalid, return an empty string.
4. There may be multiple valid order of letters, return the smallest in normal lexicographical order.
5. The letters in **one** string are of the same rank by default and are sorted in Human dictionary order.

#### Example 1:

```
Input：["wrt","wrf","er","ett","rftt"]
Output："wertf"
Explanation：
from "wrt"and"wrf" ,we can get 't'<'f'
from "wrt"and"er" ,we can get 'w'<'e'
from "er"and"ett" ,we can get 'r'<'t'
from "ett"and"rftt" ,we can get 'e'<'r'
So return "wertf"
```

#### Example 2:

```
Input：["z","x"]
Output："zx"
Explanation：
from "z" and "x"，we can get 'z' < 'x'
So return "zx"
```

### Code

```jsx title="Python"
from heapq import *
class Solution:
    """
    @param words: a list of words
    @return: a string which is correct order
    """
    def alienOrder(self, words):
        # Construct Graph
        in_degree = {ch: 0 for word in words for ch in word}
        neighbors = {ch: [] for word in words for ch in word}
        for pos in range(len(words) - 1):
            for i in range(min(len(words[pos]), len(words[pos+1]))):
                pre, next = words[pos][i], words[pos+1][i]
                if pre != next:
                	in_degree[next] += 1
                    neighbors[pre].append(next)
                    break
        
        # Topological Sort
        heap = [ch for ch in in_degree if in_degree[ch] == 0]
        heapify(heap)
        order = []
        while heap:
            for _ in range(len(heap)):
                ch = heappop(heap)
                order.append(ch)
                for child in neighbors[ch]:
                    in_degree[child] -= 1
                    if in_degree[child] == 0:
                        heappush(heap, child)
        
        # order is invalid
        if len(order) != len(in_degree):
            return ""
        return ''.join(order)
```
