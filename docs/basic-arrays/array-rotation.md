---
sidebar_position: 2
---

# Array Rotation

### Problem Statement

Array Rotation

### Code

```jsx title="python code"
# ROTATION OF ARRAYS

def rotateArrayStep(arr, rotations):

    for index in range(0, rotations):
        temp = arr[0]
        for secondIndex in range(0, len(arr)-1):
            arr[secondIndex] = arr[secondIndex + 1]
        arr[len(arr)-1] = temp

    return arr


if __name__ == "__main__":

    print(rotateArrayStep([1, 2, 3, 4, 5, 6, 7, 8], 2))
```

### Output

```jsx title="output"
[3, 4, 5, 6, 7, 8, 1, 2];
```
