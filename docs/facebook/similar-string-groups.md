---
sidebar_position: 148
tags: [facebook]
---

# Similar String Groups

### Problem Statement

Two strings X and Y are similar if we can swap two letters (in different positions) of X, so that it equals Y. Also two strings X and Y are similar if they are equal.

For example, "tars" and "rats" are similar (swapping at positions 0 and 2), and "rats" and "arts" are similar, but "star" is not similar to "tars", "rats", or "arts".

Together, these form two connected groups by similarity: {"tars", "rats", "arts"} and {"star"}. Notice that "tars" and "arts" are in the same group even though they are not similar. Formally, each group is such that a word is in the group if and only if it is similar to at least one other word in the group.

We are given a list strs of strings where every string in strs is an anagram of every other string in strs. How many groups are there?

[Leetcode Link](https://leetcode.com/problems/similar-string-groups)

#### Example 1:

```
Input: strs = ["tars","rats","arts","star"]
Output: 2
```

#### Example 2:

```
Input: strs = ["omv","ovm"]
Output: 1
```

#### Constraints:

- 1 <= strs.length <= 300
- 1 <= strs[i].length <= 300
- strs[i] consists of lowercase letters only.
- All words in strs have the same length and are anagrams of each other.

### Code

```python title="Python"
class Solution:
    def numSimilarGroups(self, strs: List[str]) -> int:
        N = len(strs)
        parent = [i for i in range(N)]
        depth = [1 for _ in range(N)]

        def find(idx):
            if idx != parent[idx]:
                return find(parent[idx])
            return idx

        def union(idx1, idx2):
            p1 = find(idx1)
            p2 = find(idx2)
            if p1 == p2: return
            if depth[p1] < depth[p2]:
                parent[p1] = p2
            elif depth[p2] < depth[p1]:
                parent[p2] = p1
            else:
                parent[p2] = p1
                depth[p1] += 1

        def similar(w1, w2):
            dif_idx = -1
            for idx in range(len(w1)):
                if w1[idx] != w2[idx]:
                    if dif_idx < 0:
                        dif_idx = idx
                    else:
                        if w1[dif_idx] != w2[idx]: return False
                        if w2[dif_idx] != w1[idx]: return False
                        if w1[idx+1:] != w2[idx+1:]: return False
                        return True
            return True

        for idx in range(1, N):
            for pid in range(0, idx):
                if similar(strs[pid], strs[idx]):
                    union(pid, idx)

        return len([i for i, p in enumerate(parent) if i==p])
```
