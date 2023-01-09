---
sidebar_position: 5
---

# Selection Sort

### Problem Statement

Sort a linked list using Selection Sort.

### Code

```python title="Python Code"
# SELECTION SORT

# FIND THE MINIMUM IN [0,...N] THEN [1,...N] AND SO ON AND SWAP

def selectionSort(array):
    for index in range(0, len(array)):
        minIndex = index
        for secondIndex in range(index + 1, len(array)):
            if(array[minIndex] > array[secondIndex]):
                minIndex = secondIndex
        array[index], array[minIndex] = array[minIndex], array[index]
    return array


if __name__ == "__main__":

    print(selectionSort([45, 78, 3, 67, 90, 0, 12]))
```

### Output

```
[0, 3, 12, 45, 67, 78, 90]
```
