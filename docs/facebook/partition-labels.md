---
sidebar_position: 71
tags: [facebook]
---

# Partition Equal Subset Sum

### Problem Statement

You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

Return a list of integers representing the size of these parts.

[Leetcode link](https://leetcode.com/problems/partition-labels)

#### Example 1:

```
Input: s = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
```

#### Example 2:

```
Input: s = "eccbbbbdec"
Output: [10]
```

### Constraints

- 1 <= s.length <= 500
- s consists of lowercase English letters.

### Code

```python title="Python3 Code"

class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        L = len(s)
        last = {s[i]: i for i in range(L)} # last appearance of the letter
        i, ans = 0, []
        while i < L:
            end, j = last[s[i]], i + 1
            while j < end: # validation of the part [i, end]
                if last[s[j]] > end:
                    end = last[s[j]] # extend the part
                j += 1

            ans.append(end - i + 1)
            i = end + 1

        return ans
```
