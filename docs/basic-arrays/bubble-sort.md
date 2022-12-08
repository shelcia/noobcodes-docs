---
sidebar_position: 4
---

# Bubble Sort

### Problem Statement

Sort a linked list using Bubble Sort
[LeetCode link](https://leetcode.com/problems/sort-list/)

### Code

```jsx title="Python Code"
# BUBBLE SORT
def bubbleSort(array):
    for index in range(0, len(array)):
        for secondIndex in range(0, len(array)-index-1):
            if(array[secondIndex] > array[secondIndex+1]):
                array[secondIndex], array[secondIndex +
                                          1] = array[secondIndex+1], array[secondIndex]

    return(array)


if __name__ == "__main__":

    print(bubbleSort([45, 78, 3, 67, 90, 0, 12]))
```

### Output

```jsx title="output"
[0, 3, 12, 45, 67, 78, 90];
```
