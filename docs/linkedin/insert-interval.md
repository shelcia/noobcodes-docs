---
sidebar_position: 30
tags: [linkedin]
---

# Insert Interval

### Problem Statement

You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return `intervals` after the insertion.

[Leetcode Link](https://leetcode.com/problems/insert-interval/)

#### Example 1:

```
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
```

#### Example 2:

```
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
```

#### Constraints:

- 0 <= intervals.length <= 10<sup>4</sup>
- intervals[i].length == 2
- 0 <= starti <= endi <= 10<sup>5</sup>
- intervals is sorted by starti in ascending order.
- newInterval.length == 2
- 0 <= start <= end <= 10<sup>5</sup>

### Code

```python title="Python"
def insert(self, intervals, newInterval):
        """
        :type intervals: List[List[int]]
        :type newInterval: List[int]
        :rtype: List[List[int]]
        """
        index = bisect_left(intervals, newInterval)
        intervals.insert(index, newInterval)
        toremove = []
        for i in range(1, len(intervals)):
            if intervals[i-1][1]>=intervals[i][0]:
                intervals[i][0] = intervals[i-1][0]
                intervals[i][1] = max(intervals[i][1], intervals[i-1][1])
                toremove.append(i-1)
        c = 0
        for i in toremove:
            del intervals[i-c]
            c+=1
        return intervals
```
