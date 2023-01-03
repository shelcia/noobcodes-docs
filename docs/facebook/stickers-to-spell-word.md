---
sidebar_position: 170
tags: [facebook]
---

# Stickers to Spell Word

### Problem Statement

We are given n different types of stickers. Each sticker has a lowercase English word on it.

You would like to spell out the given string target by cutting individual letters from your collection of stickers and rearranging them. You can use each sticker more than once if you want, and you have infinite quantities of each sticker.

Return the minimum number of stickers that you need to spell out target. If the task is impossible, return -1.

Note: In all test cases, all words were chosen randomly from the 1000 most common US English words, and target was chosen as a concatenation of two random words.

[Leetcode link](https://leetcode.com/problems/stickers-to-spell-word)

### Examples

```
Example 1:

Input: stickers = ["with","example","science"], target = "thehat"
Output: 3
Explanation:
We can use 2 "with" stickers, and 1 "example" sticker.
After cutting and rearrange the letters of those stickers, we can form the target "thehat".
Also, this is the minimum number of stickers necessary to form the target string.


Example 2:

Input: stickers = ["notice","possible"], target = "basicbasic"
Output: -1
Explanation:
We cannot form the target "basicbasic" from cutting letters from the given stickers.
```

### Constraints

- n == stickers.length
- 1 <= n <= 50
- 1 <= stickers[i].length <= 10
- 1 <= target.length <= 15
- stickers[i] and target consist of lowercase English letters.

### Code

```python title="Python3 Code"
class Solution:
    def minStickers(self, stickers: List[str], target: str) -> int:
    tgt = Counter(target)
    sticker_map = defaultdict(list)
    visited = set()

    for sticker in stickers:
        for c in set(sticker):
            sticker_map[c].append(Counter(sticker))

	# cnt2str is to convert a hashmap back to string in order to store in the set
    def cnt2str(counter):
        return ''.join([k * v for k, v in counter.items()])

    def bfs(tgt, visited):
        queue = deque([(tgt, 0)])
        while queue:
            cur, step = queue.popleft()
            if not cur: return step
            if cnt2str(cur) in visited: continue
            visited.add(cnt2str(cur))
            k = [x for x in cur.keys()][0]
            for st in sticker_map[k]:
                cur_copy = cur.copy()
                for k in cur.keys():
                    cur_copy[k] -= st[k]
                    if cur_copy[k] <= 0: del cur_copy[k]
                queue.append((cur_copy, step + 1))
        return -1
    return bfs(tgt, visited)
```
