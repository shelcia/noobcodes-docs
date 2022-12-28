---
sidebar_position: 104
tags: [amazon]
---

# Combination Sum II

### Problem Statement

Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used **once** in the combination.

Note: The solution set must not contain duplicate combinations.

[LeetCode link](https://leetcode.com/problems/combination-sum-ii)

#### Example 1:

```
Input: candidates = [10,1,2,7,6,1,5], target = 8
Output:
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
```

#### Example 2:

```
Input: candidates = [2,5,2,1,2], target = 5
Output:
[
[1,2,2],
[5]
]
```

### Constraints:

- 1 <= candidates.length <= 100
- 1 <= candidates[i] <= 50
- 1 <= target <= 30

### Code

```jsx title="Python Code"

class Solution(object):
    def combinationSum2(self, candidates, target):
        candidates.sort()
        table = [None] + [set() for i in range(target)]
        for i in candidates:
            if i > target:
                break
            for j in range(target - i, 0, -1):
                table[i + j] |= {elt + (i,) for elt in table[j]}
            table[i].add((i,))
        return map(list, table[target])
```
