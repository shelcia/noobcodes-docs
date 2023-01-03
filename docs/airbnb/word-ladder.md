---
sidebar_position: 25
tags: [airbnb]
---

# Word Ladder

### Problem Statement

A **transformation** sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words `beginWord -> s1 -> s2 -> ... -> sk` such that:

- Every adjacent pair of words differs by a single letter.
- Every s<sub>i</sub> for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
- s<sub>k</sub> == endWord

Given two words, `beginWord` and `endWord`, and a dictionary `wordList`, return the **number of words** in the **shortest transformation sequence** from `beginWord` to `endWord`, or `0` if no such sequence exists.

[Leetcode Link](https://leetcode.com/problems/word-ladder/)

#### Example 1:

```
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
```

#### Example 2:

```
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: 0
Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
```

#### Constraints:

- 1 <= beginWord.length <= 10
- endWord.length == beginWord.length
- 1 <= wordList.length <= 5000
- wordList[i].length == beginWord.length
- beginWord, endWord, and wordList[i] consist of lowercase English letters.
- beginWord != endWord
- All the words in wordList are unique.

### Code

```jsx title="Python"
class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        s=set(wordList)
        l=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t',
        'u','v','w','x','y','z']
        queue=deque([])
        queue.append([beginWord,0])
        while queue:
            a,b=queue.popleft()
            if a==endWord:
                return b+1
            for j in range(len(a)):
                for i in l:
                    if (a[:j]+i+a[j+1:]) in s and (a[:j]+i+a[j+1:])!=beginWord:
                        s.remove(a[:j]+i+a[j+1:])
                        queue.append([a[:j]+i+a[j+1:],b+1])
        return 0
        
```
