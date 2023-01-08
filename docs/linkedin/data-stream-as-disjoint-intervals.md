---
sidebar_position: 12
tags: [LinkedIn]
---

# Data Stream as Disjoint Intervals

### Problem Statement

Given a data stream input of non-negative integers a1, a2, ..., an, summarize the numbers seen so far as a list of disjoint intervals.

Implement the `SummaryRanges` class:

- `SummaryRanges()` Initializes the object with an empty stream.
- `void addNum(int value)` Adds the integer value to the stream.
- `int[][] getIntervals()` Returns a summary of the integers in the stream currently as a list of disjoint intervals `[starti, endi]`. The answer should be sorted by `starti`.
 
[Leetcode Link](https://leetcode.com/problems/data-stream-as-disjoint-intervals/)

#### Example 1:

```
Input
["SummaryRanges", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals", "addNum", "getIntervals"]
[[], [1], [], [3], [], [7], [], [2], [], [6], []]
Output
[null, null, [[1, 1]], null, [[1, 1], [3, 3]], null, [[1, 1], [3, 3], [7, 7]], null, [[1, 3], [7, 7]], null, [[1, 3], [6, 7]]]

Explanation
SummaryRanges summaryRanges = new SummaryRanges();
summaryRanges.addNum(1);      // arr = [1]
summaryRanges.getIntervals(); // return [[1, 1]]
summaryRanges.addNum(3);      // arr = [1, 3]
summaryRanges.getIntervals(); // return [[1, 1], [3, 3]]
summaryRanges.addNum(7);      // arr = [1, 3, 7]
summaryRanges.getIntervals(); // return [[1, 1], [3, 3], [7, 7]]
summaryRanges.addNum(2);      // arr = [1, 2, 3, 7]
summaryRanges.getIntervals(); // return [[1, 3], [7, 7]]
summaryRanges.addNum(6);      // arr = [1, 2, 3, 6, 7]
summaryRanges.getIntervals(); // return [[1, 3], [6, 7]]
```

### Code

```jsx title="Python"
class SummaryRanges(object):

  def __init__(self):
    self.intervals = []
    
  def addNum(self, val):
    heapq.heappush(self.intervals, (val, Interval(val, val)))
    
  def getIntervals(self):
    stack = []
    while self.intervals:
        idx, cur = heapq.heappop(self.intervals)
        if not stack:
            stack.append((idx, cur))
        else:
            _, prev = stack[-1]
            if prev.end + 1 >= cur.start:
                prev.end = max(prev.end, cur.end)
            else:
                stack.append((idx, cur))
    self.intervals = stack
    return list(map(lambda x: x[1], stack))
```
