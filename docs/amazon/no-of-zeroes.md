---
sidebar_position: 16
tags: [amazon]
---

# Find the number of zeroes

### Problem Statement

Given an array of 1s and 0s which has all 1s first followed by all 0s.
Find the number of 0s. Count the number of zeroes in the given array.

##### Examples :

```
Input: arr[] = {1, 1, 1, 1, 0, 0}
Output: 2

Input: arr[] = {1, 0, 0, 0, 0}
Output: 4

Input: arr[] = {0, 0, 0}
Output: 3

Input: arr[] = {1, 1, 1, 1}
Output: 0
```

Time Complexity -> O(logN)
Space Complexity -> O(1)

### Code

```jsx title="Python Code"
def NoOfZeroesI(arr):

    count = 0

    for ele in arr:
        if ele == 0:
            count += 1
    print(count)


def NoOfZeroesII(arr, low, high):

    if (high >= low):

        # Check if mid element is first 0
        mid = low + int((high - low) / 2)
        if ((mid == 0 or arr[mid-1] == 1)
                and arr[mid] == 0):
            return mid

        # If mid element is not 0
        if (arr[mid] == 1):
            return NoOfZeroesII(arr, (mid + 1), high)

        # If mid element is 0, but not first 0
        else:
            return NoOfZeroesII(arr, low, (mid - 1))

    return -1


arr = [1, 1, 1, 0, 0, 0, 0, 0]

NoOfZeroesI(arr)
print(NoOfZeroesII(arr, 0, len(arr)-1))
```
