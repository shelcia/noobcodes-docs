---
sidebar_position: 1
tags: [Hotstar]
---

# Three Equal Parts

### Problem Statement

You are given an array `arr` which consists of only zeros and ones, divide the array into three non-empty parts such that all of these parts represent the same binary value.

If it is possible, return any `[i, j]` with `i + 1 < j`, such that:

- `arr[0], arr[1], ..., arr[i]` is the first part,
- `arr[i + 1], arr[i + 2], ..., arr[j - 1]` is the second part, and
- `arr[j], arr[j + 1], ..., arr[arr.length - 1]` is the third part.
- All three parts have equal binary values.

If it is not possible, return `[-1, -1]`.

Note that the entire part is used when considering what binary value it represents. For example, `[1,1,0]` represents `6` in decimal, not `3`. Also, leading zeros are allowed, so `[0,1,1]` and `[1,1]` represent the same value.

#### Example 1:

```
Input: arr = [1,0,1,0,1]
Output: [0,3]
```

#### Example 2:

```
Input: arr = [1,1,0,1,1]
Output: [-1,-1]
```

#### Example 3:

```
Input: arr = [1,1,0,0,1]
Output: [0,2]
```

#### Constraints:

- `3 <= arr.length <= 3 * 10`<sup>4</sup>
- `arr[i]` is `0` or `1`

### Code

```python title="Python Code"
class Solution:
  def threeEqualParts(self, A: List[int]) -> List[int]:
    ones = sum(a == 1 for a in A)

    if ones == 0:
      return [0, len(A) - 1]
    if ones % 3 != 0:
      return [-1, -1]

    k = ones // 3
    i = 0

    for i in range(len(A)):
      if A[i] == 1:
        first = i
        break

    gapOnes = k

    for j in range(i + 1, len(A)):
      if A[j] == 1:
        gapOnes -= 1
        if gapOnes == 0:
          second = j
          break

    gapOnes = k

    for i in range(j + 1, len(A)):
      if A[i] == 1:
        gapOnes -= 1
        if gapOnes == 0:
          third = i
          break

    while third < len(A) and A[first] == A[second] == A[third]:
      first += 1
      second += 1
      third += 1

    if third == len(A):
      return [first - 1, second]
    return [-1, -1]

```
