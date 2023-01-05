---
sidebar_position: 234
tags: [facebook]
---

# Word Search

### Problem Statement

Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

[LeetCode link](https://leetcode.com/problems/word-search-ii)

#### Example 1:

```
Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
Output: ["eat","oath"]
```

#### Example 2:

```
Input: board = [["a","b"],["c","d"]], words = ["abcb"]
Output: []
```

### Code

```python title="Python Code"

class TrieNode:
    def __init__(self, val):
        self.val = val
        self.end = False
        self.next = {}

class Solution:

    def build_trie(self, words):
        root = TrieNode(0)
        for word in words:
            cur = root
            for c in word:
                if c not in cur.next:
                    cur.next[c] = TrieNode(c)
                cur = cur.next[c]
            cur.end = True
        return root

    def find_words(self, board, i, j, trie, word, ret):
        v = board[i][j]
        board[i][j] = '0'

        if trie.end:
            ret.add(word)

        # optimization: continue only if there are more words to match
        if len(trie.next) > 0:
            for x, y in [
                (i - 1, j),
                (i + 1, j),
                (i, j - 1),
                (i, j + 1)]:
                if x < 0 or x >= len(board) or y < 0 or y >= len(board[0]):
                    continue
                c = board[x][y]
                if c in trie.next:
                    self.find_words(board, x, y, trie.next[c], word + c, ret)

        board[i][j] = v

    def findWords(self, board, words):
        """
        :type board: List[List[str]]
        :type words: List[str]
        :rtype: List[str]
        """
        if len(board) == 0 or len(board[0]) == 0:
            return []

        root = self.build_trie(words)

        ret = set()
        for i, r in enumerate(board):
            for j, v in enumerate(r):
                if v in root.next:
                    self.find_words(board, i, j, root.next[v], v, ret)
        return list(ret)
```
