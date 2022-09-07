---
sidebar_position: 11
tags: [amazon]
---

# Count of distinct numbers

### Problem Statement

Given an array of size n and an integer k, return the count of distinct numbers in
all windows of size k.

Example:

```
Input: arr[] = {1, 2, 1, 3, 4, 2, 3};
       k = 4
Output: 3 4 4 3

Explanation:
First window is {1, 2, 1, 3}, count of distinct numbers is 3
Second window is {2, 1, 3, 4} count of distinct numbers is 4
Third window is {1, 3, 4, 2} count of distinct numbers is 4
Fourth window is {3, 4, 2, 3} count of distinct numbers is 3

Input: arr[] = {1, 2, 4, 4};
       k = 2
Output: 2 2 1

Explanation:
First window is {1, 2}, count of distinct numbers is 2
First window is {2, 4}, count of distinct numbers is 2
First window is {4, 4}, count of distinct numbers is 1
```

### Code

```jsx title="Python Code"
def CountDistinctI(nums, k):

    l, r = 0, 0

    res = []
    distintEleWindow = []

    while r < len(nums):
        print('begin', distintEleWindow)
        # print('r', r)

        if nums[r] not in distintEleWindow:
            distintEleWindow.append(nums[r])

        # window going out of bound
        if r - l >= k - 1:
            print(l, r, k, distintEleWindow)

            l += 1
            res.append(len(distintEleWindow))
            distintEleWindow = []
        # print('pointers', l, r, nums[l:r+1])
        r += 1

    print(res)


CountDistinctI([1, 2, 1, 3, 4, 2, 3], 4)  # 3 4 4 3
```
