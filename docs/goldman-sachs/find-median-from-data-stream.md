---
sidebar_position: 818
tags: [Goldman Sachs]
---

# Find Median from Data Stream

### Problem Statement

The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.

For example, for `arr = [2,3,4]`, the median is `3`.
For example, for `arr = [2,3]`, the median is (`2 + 3) / 2 = 2.5.`
Implement the `MedianFinder` class:

`MedianFinder()` initializes the MedianFinder object.
`void addNum(int num)` adds the integer num from the data stream to the data structure.
double `findMedian()` returns the median of all elements so far. Answers within` 10-5` of the actual answer will be accepted.

[Leetcode Link](https://leetcode.com/problems/find-median-from-data-stream/)

#### Example 1:

```

Input
["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
[[], [1], [2], [], [3], []]
Output
[null, null, null, 1.5, null, 2.0]

Explanation
MedianFinder medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0
```

#### Constraints:

```
-105 <= num <= 105
There will be at least one element in the data structure before calling findMedian.
At most 5 * 104 calls will be made to addNum and findMedian.
```

### Code

```java title="java Code"


private PriorityQueue<Integer> small = new PriorityQueue<>(Collections.reverseOrder());
private PriorityQueue<Integer> large = new PriorityQueue<>();
private boolean even = true;

public double findMedian() {
    if (even)
        return (small.peek() + large.peek()) / 2.0;
    else
        return small.peek();
}

public void addNum(int num) {
    if (even) {
        large.offer(num);
        small.offer(large.poll());
    } else {
        small.offer(num);
        large.offer(small.poll());
    }
    even = !even;
}
```
