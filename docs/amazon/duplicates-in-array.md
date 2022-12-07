---
sidebar_position: 13
tags: [amazon]
---

# Dupliates in a Array

### Problem Statement

Given an array of n elements that contains elements from 0 to n-1,
with any of these numbers appearing any number of times.
Find these repeating numbers in O(n) and using only constant memory space.
[LeetCode link](https://leetcode.com/problems/find-all-duplicates-in-an-array/)

### Code

```jsx title="Approach 1 - we will create hash map (Python Code)"
def duplicateArray(arr):
    hashmap = []

    for i in range(len(arr)):
        if(arr[i] in hashmap):
            print(arr[i])
        else:
            hashmap.append(arr[i])
```

```jsx title="Approach 2 - O(1) space complexity O(n) time complexity (Python Code)"
def duplicateArray(arr):
    print('length', len(arr), 'arr', arr)
    for i in range(len(arr)):

        x = arr[i] % len(arr)
        arr[x] = arr[x] + len(arr)
        print('x:', x, 'arr[x]:', arr[x], 'array', arr)

    print("The repeating elements are : ")
    for i in range(len(arr)):
        if (arr[i] >= len(arr)*2):
            print(i, " ")


if __name__ == '__main__':
    arr = [1, 2, 3, 6, 3, 6, 1]
    duplicateArray(arr)

```
