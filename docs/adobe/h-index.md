---
sidebar_position: 6
tags: [adobe]
---

# h-Index

### Problem Statement

Given an array of integers `citations` where citations[i] is the number of citations a researcher received for their `ith` paper, return compute the researcher's `h`-index.

According to the definition of `h`-index on Wikipedia: A scientist has an index `h` if `h` of their n papers have at least `h` citations each, and the other n − `h` papers have no more than `h` citations each.

If there are several possible values for `h`, the maximum one is taken as the `h`-index.

#### Example 1:

```
Input: citations = [3,0,6,1,5]
Output: 3
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.
```

#### Example 2:

```
Input: citations = [1,3,1]
Output: 1
```

#### Constraints:

- `n == citations.length`
- `1 <= n <= 5000`
- `0 <= citations[i] <= 1000`

### Code

```python title="Python Code"
class Solution:
    def hIndex(self, citations):
        n = len(citations)
        papers = [0] * (n + 1)  # papers[i] is the number of papers with i citations.
        for c in citations:
            papers[min(n, c)] += 1  # All papers with citations larger than n is count as n.
        i = n
        s = papers[n]  # sum of papers with citations >= i
        while i > s:
            i -= 1
            s += papers[i]
        return i


```

```cpp title="C++"
class Solution {
public:
    int hIndex(vector<int>& c) {
        // 3 support variables for us
        int s = 0, e = c.size() - 1, avg;
        // the base of every happy binary search ever: having a sorted dataset
        sort(begin(c), end(c));
        // some good old binary search here to find the maximum element meeting the conditions
        while (s <= e) {
            if (c[avg = (e + s) / 2] < c.size() - avg) s = avg + 1;
            else e = avg - 1;
        }
        return c.size() - s;
    }
};

```
