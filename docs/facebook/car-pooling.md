---
sidebar_position: 11
tags: [facebook]
---

# Car Pooling

### Problem Statement

There is a car with capacity empty seats. The vehicle only drives east (i.e., it cannot turn around and drive west).

You are given the integer capacity and an array trips where trips[i] = [numPassengersi, fromi, toi] indicates that the ith trip has numPassengersi passengers and the locations to pick them up and drop them off are fromi and toi respectively. The locations are given as the number of kilometers due east from the car's initial location.

Return true if it is possible to pick up and drop off all passengers for all the given trips, or false otherwise.

[Leetcode link](https://leetcode.com/problems/car-pooling/)

### Example 1:

```
Input: trips = [[2,1,5],[3,3,7]], capacity = 4
Output: false
```

### Example 2:

```
Input: trips = [[2,1,5],[3,3,7]], capacity = 5
Output: true
```

### Constraints

- 1 <= trips.length <= 1000
- trips[i].length == 3
- 1 <= numPassengers<sub>i</sub> <= 100
- 0 <= from<sub>i</sub> < to<sub>i</sub> <= 1000
- 1 <= capacity <= 10<sup>5</sup>

### Code

```python title="Python3 Code"

class Solution(object):
    def carPooling(self, trips, capacity):
        locations = [[0, 0] for _ in range(1001)]
        for num_pass, src, dest in trips:
            locations[src][0] += num_pass
            locations[dest][1] += num_pass

        total = 0
        for i in range(len(locations)):
            total = total + locations[i][0] - locations[i][1]
            if total > capacity:
                return False
        return True
```
