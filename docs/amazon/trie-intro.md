---
sidebar_position: 1
---

# Trie - Introduction

## Problem Statement

A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure,such as autocomplete and spellchecker.

![Image of Yaktocat](https://ik.imagekit.io/shelcia/Noobcodes/Trie_-_Intro__1_-removebg-preview_Uu2NejEd8.png?updatedAt=1626933058613)

## Walkthrough

### Example

![Image of Yaktocat](https://ik.imagekit.io/shelcia/Noobcodes/Trie_-_Intro-removebg-preview_hD9qKsy3d.png?updatedAt=1626873325837)

### Algorithm

## Code

```jsx title="python code"
class TrieNode:

    def __init__(self):
        self.children = {}
        self.endOfWord = False


class Trie:

    def __init__(self):
        self.root = TrieNode()

    def insertTrie(self, word):

        currentNode = self.root

        for c in word:
            if c not in currentNode.children:
                currentNode.children[c] = TrieNode()
            currentNode = currentNode.children[c]

        currentNode.endOfWord = True

    def searchTrie(self, key):

        currentNode = self.root

        for c in key:
            if c not in currentNode.children:
                return False
            currentNode = currentNode.children[c]

        # So we know that for sure this is not just a part of big string
        return currentNode.endOfWord

    def startWithTrie(self, key):

        currentNode = self.root

        for c in key:
            if c not in currentNode.children:
                return False
            currentNode = currentNode.children[c]

        return True


if __name__ == "__main__":

    instance = Trie()

    instance.insertTrie("apple")
    print(instance.searchTrie("apple"))
    print(instance.searchTrie("app"))
    print(instance.startWithTrie("app"))
    instance.insertTrie("app")
    print(instance.searchTrie("app"))
```
