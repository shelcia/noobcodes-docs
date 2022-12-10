---
sidebar_position: 16
tags: [amazon, array]
---

# Find the maximum element in an array which is first increasing and then decreasing

### Problem Statement

##### Examples :

```
Input: arr[] = {8, 10, 20, 80, 100, 200, 400, 500, 3, 2, 1}
Output: 500

Input: arr[] = {1, 3, 50, 10, 9, 7, 6}
Output: 50

Corner case (No decreasing part)
Input: arr[] = {10, 20, 30, 40, 50}
Output: 50

Corner case (No increasing part)
Input: arr[] = {120, 100, 80, 20, 0}
Output: 120
```

### Code

```python title="Python Code"
def findMax(arr, low, high):
    # Base Case: Only one element is present in arr[low..high]*/
    if low == high:
        return arr[low]

    # If there are two elements and first is greater then
    # the first element is maximum

    if high == low + 1 and arr[low] >= arr[high]:
        return arr[low]

    # If there are two elements and second is greater then
    # the second element is maximum */
    if high == low + 1 and arr[low] < arr[high]:
        return arr[high]

    mid = (high + low) // 2

    # If we reach a point where arr[mid] is greater than both of
    # its adjacent elements arr[mid-1] and arr[mid+1], then arr[mid]
    # is the maximum element

    if arr[mid] > arr[mid + 1] and arr[mid] > arr[mid - 1]:
        return arr[mid]

    # If arr[mid] is greater than the next element and smaller than the previous
    # element then maximum lies on left side of mid */
    if arr[mid] > arr[mid + 1] and arr[mid] < arr[mid - 1]:
        return findMax(arr, low, mid-1)
    else:  # when arr[mid] is greater than arr[mid-1] and smaller than arr[mid+1]
        return findMax(arr, mid + 1, high)


arr = [1, 3, 50, 10, 9, 7, 6]

print(findMax(arr, 0, len(arr)-1))
```
