---
sidebar_position: 94
tags: [LinkedIn]
---

# Word Ladder II

### Problem Statement

A **transformation sequence** from word `beginWord` to word `endWord` using a dictionary `wordList` is a sequence of words `beginWord -> s1 -> s2 -> ... -> sk` such that:

- Every adjacent pair of words differs by a single letter.
- Every s<sub>i</sub> for 1 <= i <= k is in `wordList`. Note that beginWord does not need to be in `wordList`.
- s<sub>k</sub> == endWord

Given two words, `beginWord` and `endWord`, and a dictionary `wordList`, return all the **shortest transformation sequences** from `beginWord` to `endWord`, or an empty list if no such sequence exists. Each sequence should be returned as a list of the words `[beginWord, s1, s2, ..., sk]`.

[Leetcode Link](https://leetcode.com/problems/word-ladder-ii/)

### Code

```jsx title="Python"
	class Solution:
		def findLadders(self, beginWord: str, endWord: str, wordList: List[str]) -> List[List[str]]:
			d = defaultdict(list)
			for word in wordList:
				for i in range(len(word)):
					d[word[:i]+"*"+word[i+1:]].append(word)

			if endWord not in wordList:
				return []

			visited1 = defaultdict(list)
			q1 = deque([beginWord])
			visited1[beginWord] = []

			visited2 = defaultdict(list)
			q2 = deque([endWord])
			visited2[endWord] = []

			ans = []
			def dfs(v, visited, path, paths):
				path.append(v)
				if not visited[v]:
					if visited is visited1:
						paths.append(path[::-1])
					else:
						paths.append(path[:])
				for u in visited[v]:
					dfs(u, visited, path, paths)
				path.pop()

			def bfs(q, visited1, visited2, frombegin):
				level_visited = defaultdict(list)
				for _ in range(len(q)):
					u = q.popleft()

					for i in range(len(u)):
						for v in d[u[:i]+"*"+u[i+1:]]:
							if v in visited2:
								paths1 = []
								paths2 = []
								dfs(u, visited1, [], paths1)
								dfs(v, visited2, [], paths2)
								if not frombegin:
									paths1, paths2 = paths2, paths1
								for a in paths1:
									for b in paths2:
										ans.append(a+b)
							elif v not in visited1:
								if v not in level_visited:
									q.append(v)
								level_visited[v].append(u)
				visited1.update(level_visited)

			while q1 and q2 and not ans:
				if len(q1) <= len(q2):
					bfs(q1, visited1, visited2, True)
				else:
					bfs(q2, visited2, visited1, False)

			return ans
```
