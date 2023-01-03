---
sidebar_position: 10
tags: [airbnb]
---

# Employee Free Time

### Problem Statement

We are given a list schedule of employees, which represents the working time for each employee.

Each employee has a list of non-overlapping Intervals, and these intervals are in sorted order.

Return the list of finite intervals representing common, positive-length free time for all employees, also in sorted order.

The Intervals is an 1d-array. Each two numbers shows an interval. For example, [1,2,8,10] represents that the employee works in [1,2] and [8,10].

Also, we wouldn't include intervals like [5, 5] in our answer, as they have zero length.

#### Example 1:

```
Input：schedule = [[1,2,5,6],[1,3],[4,10]]
Output：[(3,4)]
Explanation:
There are a total of three employees, and all common
free time intervals would be [-inf, 1], [3, 4], [10, inf].
We discard any intervals that contain inf as they aren't finite.
```

#### Example 2:

```
Input：schedule = [[1,3,6,7],[2,4],[2,5,9,12]]
Output：[(5,6),(7,9)]
Explanation：
There are a total of three employees, and all common
free time intervals would be [-inf, 1], [5, 6], [7, 9],[12,inf].
We discard any intervals that contain inf as they aren't finite.
```

### Code

```jsx title="Python"

"""
Definition of Interval.
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""

class Solution:
    def employeeFreeTime(self, schedule):
        import heapq
        heap, result = [], []
        for employee in schedule:
            for i in range(0, len(employee), 2):
                heapq.heappush(heap, (employee[i], 0))
                heapq.heappush(heap, (employee[i + 1], 1))
        
        count, n = 0, len(heap)
        while n > 1:
            left = heapq.heappop(heap)
            right = heap[0]
            if (left[1] == 0):
                count += 1
            else:
                count -= 1
            if left[1] == 1 and right[1] == 0:
                if count == 0:
                    result.append(Interval(left[0], right[0]))
            n = len(heap)
        
        return result




```