---
sidebar_position: 54
tags: [facebook]
---

# Number of Days Between Two Dates

### Problem Statement

Write a program to count the number of days between two dates.

The two dates are given as strings, their format is YYYY-MM-DD as shown in the examples.

[Leetcode Link](https://leetcode.com/problems/number-of-days-between-two-dates)

#### Example 1:

```
Input: date1 = "2019-06-29", date2 = "2019-06-30"
Output: 1
```

#### Example 2:

```
Input: date1 = "2020-01-15", date2 = "2019-12-31"
Output: 15
```

#### Constraints:

- The given dates are valid dates between the years 1971 and 2100.

### Code

```python title="Python Code"
from datetime import date

class Solution:
    def daysBetweenDates(self, date1: str, date2: str) -> int:
        date1 = list(map(int, date1.split('-')))
        date2 = list(map(int, date2.split('-')))

        one = date(date1[0], date1[1], date1[2])
        two =  date(date2[0], date2[1], date2[2])
        delta = one - two

        return(abs(delta.days))
```
