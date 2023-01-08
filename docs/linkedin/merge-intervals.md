---
sidebar_position: 52
tags: [linkedin, array]
---

# Merge Intervals

### Problem Statement

Given an array of intervals where `intervals[i] = [start`<sub>i</sub>`, end`<sub>i</sub>`]`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

[Leetcode link](https://leetcode.com/problems/merge-intervals)

#### Example 1:

```
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]

Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
```

#### Example 2:

```
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]

Explanation: Intervals [1,4] and [4,5] are considered overlapping.
```

#### Constraints

- `1 <= intervals.length <= 10`<sup>4</sup>
- `intervals[i].length == 2`
- `0 <= start`<sub>i</sub> `<= end`<sub>i</sub> `<= 10`<sup>4</sup>

### Code

```python title="Python3 Code"
class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        if not intervals:
            return []

        sortedIntervals = sorted(intervals)
        mergedIntervals = []

        currentStart, currentEnd = sortedIntervals[0]

        for start, end in sortedIntervals[1:]:
            if start > currentEnd:
                mergedIntervals.append((currentStart, currentEnd))
                currentStart, currentEnd = start, end
            else:
                currentEnd = max(end, currentEnd)

        mergedIntervals.append((currentStart, currentEnd))

        return mergedIntervals
```
