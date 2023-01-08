---
sidebar_position: 10
tags: [LinkedIn]
---

# Combination Sum

### Problem Statement

Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the
frequency
of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

[LeetCode link](https://leetcode.com/problems/combination-sum)

#### Example 1:

```
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
```

#### Example 2:

```
Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
```

#### Example 3:

```
Input: candidates = [2], target = 1
Output: []
```

### Constraints:

- 1 <= candidates.length <= 30
- 2 <= candidates[i] <= 40
- All elements of candidates are distinct.
- 1 <= target <= 40

### Code

```python title="Python Code"

class Solution(object):
    def sort(self, candidates):
        min_num = min(candidates)
        max_num = max(candidates)
        tbl = [0 for i in range(min_num, max_num + 1)]
        for i in range(len(candidates)):
            tbl[candidates[i] - min_num] = candidates[i]
        j = 0
        for i in range(len(tbl)):
            if tbl[i] != 0:
                candidates[j] = tbl[i]
                j += 1

    def go_through(self, candidates, target, counted, from_to_left, combinations):
        if target == 0:
            combinations.append(counted)
        else:
            for i in range(from_to_left, -1, -1):
                if candidates[i] <= target:
                    new_counted = counted[:]
                    new_counted.append(candidates[i])
                    self.go_through(candidates, target-candidates[i], new_counted, i, combinations)

    def combinationSum(self, candidates, target):
        self.sort(candidates)
        combs = []
        self.go_through(candidates, target, [], len(candidates) - 1,combs)
        return combs
```
