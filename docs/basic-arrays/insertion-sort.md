---
sidebar_position: 6
---

# Insertion Sort

### Problem Statement

Insertion Sort

### Code

```jsx title="Python Code"
# INSERTION SORT

# COMPARE THE PREDECESSOR WITH KEY, IF LESS SWAP WITH THE ELEMENT AND SO ON

def insertionSort(arr):

    for index in range(1, len(arr)):

        key = arr[index]

        j = index - 1

        while j >= 0 and key < arr[j]:
            arr[j+1] = arr[j]
            j -= 1
        arr[j+1] = key

    return arr


if __name__ == "__main__":

    print(insertionSort([45, 78, 3, 67, 90, 0, 12]))
```

### Output

```jsx title="output"
[0, 3, 12, 45, 67, 78, 90];
```
