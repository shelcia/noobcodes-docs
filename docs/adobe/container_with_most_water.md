---
sidebar_position: 30
tags: [adobe]
---

# Container With Most Water

### Problem Statement

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the i<sup>th</sup> line are `(i, 0) and (i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

[Leetcode Link](https://leetcode.com/problems/container-with-most-water/)

#### Example 1:

![](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg)

```
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
```

#### Example 2:

```
Input: height = [1,1]
Output: 1
```



#### Constraints:

- `n == height.length`
- `2 <= n <= 105`
- `0 <= height[i] <= 104`
### Code

```python title="Python Code"

class Solution:
    def maxArea(self, H: List[int]) -> int:
        ans, i, j = 0, 0, len(H)-1
        while (i < j):
            if H[i] <= H[j]:
                res = H[i] * (j - i)
                i += 1
            else:
                res = H[j] * (j - i)
                j -= 1
            if res > ans: ans = res
        return ans
    
```

