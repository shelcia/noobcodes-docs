---
sidebar_position: 66
tags: [amazon]
---

# Meeting Rooms II

### Problem Statement

Given an array of meeting time intervals consisting of start and end times `[[s1,e1],[s2,e2],...] (si < ei)`, find the minimum number of conference rooms required.)

[Leetcode link](https://leetcode.com/problems/meeting-rooms-ii)

#### Example 1:

```
Input: intervals = [(0,30),(5,10),(15,20)]
Output: 2
Explanation:
We need two meeting rooms
room1: (0,30)
room2: (5,10),(15,20)
```

#### Example 2:

```
Input: intervals = [(2,7)]
Output: 1
Explanation:
Only need one meeting room
```

### Code

```python title="Python Code"
class Solution:
    def minMeetingRooms(self, intervals: List[List[int]]) -> int:
        size = len(intervals)
        if size<=1: return size
        heap = []
        for interval in sorted(intervals):
            if heap and interval[0]>=heap[0]:
                heapq.heappushpop(heap,interval[1])
            else:
                heapq.heappush(heap,interval[1])
        return len(heap)
```
