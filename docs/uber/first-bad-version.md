---
sidebar_position: 1
tags: [uber]
---

# First Bad Version

### Problem Statement

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

[Leetcode link](https://leetcode.com/problems/first-bad-version/)

#### Example 1:

```
Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
```

#### Example 2:

```
Input: n = 1, bad = 1
Output: 1
```

#### Constraints:

- 1 <= bad <= n <= 2<sup>31</sup> - 1

### Code

```python title="Python Code"

class Solution(object):
    def firstBadVersion(self, n):
        """
        :type n: int
        :rtype: int
        """
        start, end = 1, n
        while start < end:
            mid = start + (end - start) / 2
            if isBadVersion(mid):
                # if mid is bad, any version newer than mid is bad.
                end = mid
            else:
                # if mid is good, any version older than mid + 1 is good
                start = mid + 1
        return start

```
