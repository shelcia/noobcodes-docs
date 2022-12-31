---
sidebar_position: 82
tags: [facebook]
---

# Permutation Sequence

### Problem Statement

The set [1, 2, 3, ..., n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.

[Leetcode link](https://leetcode.com/problems/permutation-sequence)

#### Example 1:

```
Input: n = 3, k = 3
Output: "213"
```

#### Example 2:

```
Input: n = 4, k = 9
Output: "2314"
```

#### Example 3:

```
Input: n = 3, k = 1
Output: "123"
```

#### Constraints:

- `1 <= n <= 9`
- `1 <= k <= n!`

### Code

```python title="Python Code"
from math import factorial
class Solution(object):
    def getPermutation(self, n, k):
        """
        :type n: int
        :type k: int
        :rtype: str
        """
        result = ''
        nums = range(1,n+1)
        k-=1
        while nums:
            lf,k = divmod(k,factorial(n-1))
            n-=1
            result+=str(nums[lf])
            nums.pop(lf)
        return result

```
