---
sidebar_position: 85
tags: [linkedin]
---

# Top K Frequent Elements

### Problem Statement

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

[Leetcode Link](https://leetcode.com/problems/top-k-frequent-elements/)

#### Example 1:

```
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
```

#### Example 2:

```
Input: nums = [1], k = 1
Output: [1]
```

#### Constraints:

- 1 <= nums.length <= 105
- -104 <= nums[i] <= 104
- k is in the range [1, the number of unique elements in the array].
- It is guaranteed that the answer is unique.

### Code

```python title="Python"
import heapq
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        mp = {}
        an = []
        for i in nums:
            mp[i] = mp.get(i,0)+1
        # first of all I take count of each element using hash table.

        l = []
        heapq.heapify(l)

    # Now simply i created a maxheap

        for i in mp:
            heapq.heappush(l,[-mp[i],i])

        # Now in order to pop max element form heap we have to change it in maxheap and in heap i am pushing the value and key pair in form of list so that when we pop the heap then the appended list with max value will pop first

        while k>0:
            z = heapq.heappop(l)
            an.append(z[1])
            k-=1
        return an



```
