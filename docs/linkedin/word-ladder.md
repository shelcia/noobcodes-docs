---
sidebar_position: 95
tags: [LinkedIn]
---

# Word Ladder

### Problem Statement

A **transformation sequence** from word `beginWord` to word `endWord` using a dictionary `wordList` is a sequence of words `beginWord -> s1 -> s2 -> ... -> sk` such that:

- Every adjacent pair of words differs by a single letter.
- Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
- sk == endWord

Given two words, `beginWord` and `endWord`, and a dictionary `wordList`, return the **number of words** in the **shortest transformation sequence** from beginWord to endWord, or 0 if no such sequence exists.

[Leetcode Link](https://leetcode.com/problems/word-ladder/)

### Code

```jsx title="Python"
class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:     
        ns, neighbors = defaultdict(set), defaultdict(set)
        
        for w in [beginWord, *wordList]:
            for i in range(len(w)):
                ns[w[:i] + w[i+1:], i].add(w)
                
        for w in [beginWord, *wordList]:
            for i in range(len(w)):
                neighbors[w] |= ns[w[:i] + w[i+1:], i]
            neighbors[w].discard(w)          

        def dist(u):
            return sum(1 for c, d in zip(u, endWord) if c != d)
                 
        q = [(1 + dist(beginWord), 1, beginWord)]
        visited = set([beginWord])
        
        while q:            
            _, d, w = heappop(q)
            
            if w == endWord:
                return d
            
            for u in neighbors[w]:
                if u not in visited:
                    visited.add(u)
                    heappush(q, (d + 1 + dist(u), d + 1, u))                
        return 0
```
