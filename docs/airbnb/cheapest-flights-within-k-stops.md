---
sidebar_position: 5
tags: [airbnb]
---

# Cheapest Flights Within K Stops

### Problem Statement

There are `n` cities connected by some number of flights. You are given an array `flights` where `flights[i] = [fromi, toi, pricei]` indicates that there is a flight from city `fromi` to city `toi` with cost `pricei`.

You are also given three integers `src`, `dst`, and `k`, return the cheapest price from src to dst with at most `k` stops. If there is no such route, return `-1`.

[LeetCode link](https://leetcode.com/problems/cheapest-flights-within-k-stops)

#### Example 1:

```
Input: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1

Output: 700
```

##### Explanation:

![graph1](https://assets.leetcode.com/uploads/2022/03/18/cheapest-flights-within-k-stops-3drawio.png)

The graph is shown above.

The optimal path with at most **1** stop from city `0 to 3` is marked in red and has cost `100 + 600 = 700`.
**Note** that the path through cities `[0,1,2,3]` is cheaper but is invalid because it uses **2** stops.

#### Example 2:

```
Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1

Output: 200
```

##### Explanation:

![graph2](https://assets.leetcode.com/uploads/2022/03/18/cheapest-flights-within-k-stops-1drawio.png)

The graph is shown above.
The optimal path with at most **1** stop from city `0 to 2` is marked in red and has cost `100 + 100 = 200`.

#### Example 3:

```
Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0

Output: 500
```

##### Explanation:

![graph3](https://assets.leetcode.com/uploads/2022/03/18/cheapest-flights-within-k-stops-2drawio.png)

The graph is shown above.
The optimal path with no stops from city `0 to 2` is marked in red and has cost **500**.

#### Constraints:

- `1 <= n <= 100`
- `0 <= flights.length <= (n \* (n - 1) / 2)`
- `flights[i].length == 3`
- `0 <= fromi`, `toi < n`
- `fromi != toi`
- `1` `<=` price<sub>i</sub> `<=` 10<sup>4</sup>
- There will not be any multiple flights between two cities.
- `0 <= src`, `k < n`
- `src != dst`

### Code

```python title="Python Code"

class Solution(object):
    def findCheapestPrice(self, n, flights, src, dst, K):
        remain, ret, stop = [], float('inf'), 0
        weights = [sys.maxint for i in range(n)]
        graph = [{} for i in range(n)]
        for s,d,w in flights:
            graph[s][d]=w

        heapq.heappush(remain, (0, src))
        weights[src] = 0
        while remain and stop <= K:
            tmp, remain = remain, []
            while tmp:
                weight, node = heapq.heappop(tmp)
                for tonode, toweight in graph[node].items():
                    if weights[tonode] > weight + toweight:
                        weights[tonode] = weight + toweight
                        heapq.heappush(remain, (weights[tonode], tonode))
                    # this two lines are important
                    if tonode == dst and weights[tonode]<ret:
                        ret = weights[tonode]
            stop+=1
        return ret if ret < float('inf') else -1
```
