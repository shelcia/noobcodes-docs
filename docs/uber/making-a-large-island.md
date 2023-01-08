---
sidebar_position: 25
tags: [uber]
---

# Making A Large Island

### Problem Statement

You are given an `n x n` binary matrix `grid`. You are allowed to change at most one `0` to be `1`.

Return _the size of the largest **island** in `grid` after applying this operation_.

An **island** is a 4-directionally connected group of `1`s.

[Leetcode Link](https://leetcode.com/problems/making-a-large-island/)

#### Example 1:

```
Input: grid = [[1,0],[0,1]]
Output: 3

Explanation: Change one 0 to 1 and connect two 1s, then we get an island with area = 3.
```

#### Example 2:

```
Input: grid = [[1,1],[1,0]]
Output: 4

Explanation: Change the 0 to 1 and make the island bigger, only one island with area = 4.
```

#### Example 3:

```
Input: grid = [[1,1],[1,1]]
Output: 4

Explanation: Can't change any 0 to 1, only one island with area = 4.
```

#### Constraints:

- `n == grid.length`
- `n == grid[i].length`
- `1 <= n <= 500`
- `grid[i][j]` is either `0` or `1`.

### Code

```python title="Python Code"

class Solution(object):
    def largestIsland(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        if not grid or not grid[0]: return 0
        # First do a regular union find to find all the islands and their sizes, remember the biggest island's size in 'biggest'.
        # Also remember all zero positions
        uf={}
        size={}
        rank={}
        zeros=[]
        biggest=0
        def findparent(x):
            if x not in uf: return x
            if uf[x]!=x: return findparent(uf[x])
            return x
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j]==0:
                    zeros.append((i,j))
                    continue
                if (i,j) not in uf:
                    uf[(i,j)]=(i,j)
                    rank[(i,j)]=0
                    size[(i,j)]=1
                    biggest=max(biggest,1)
                for ni,nj in [(i-1,j),(i,j-1)]:
                    if 0<=ni<len(grid) and 0<=nj<len(grid[0]) and (ni,nj) in uf:
                        parA=findparent((i,j))
                        parB=findparent((ni,nj))
                        if parA!=parB:
                            if rank[parA]>rank[parB]:
                                uf[parB]=parA
                                rank[parA]+=1
                                size[parA]+=size[parB]
                                biggest=max(biggest,size[parA])
                            else:
                                uf[parA]=parB
                                rank[parB]+=1
                                size[parB]+=size[parA]
                                biggest=max(biggest,size[parB])
        # Now loop over the zeros, and check all of its '1' neighbors, and tally their sizes in 'neisizes'
        # If this new '1' connects multiple previously separated islands, the new island's size would be sum(neisizes)+1
        for i,j in zeros:
            neisizes=[]
            visited=set()
            for ni,nj in [(i-1,j),(i+1,j),(i,j-1),(i,j+1)]:
                if 0<=ni<len(grid) and 0<=nj<len(grid[0]) and (ni,nj) in uf:
                    par=findparent((ni,nj))
                    if par not in visited:
                        neisizes.append(size[par])
                        visited.add(par)
            biggest=max(biggest,sum(neisizes)+1)
        return biggest
```
