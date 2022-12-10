---
sidebar_position: 3
---

# Delete Duplicates

### Problem Statement

Delete Duplicate

### Code

```python title="Python Code"
# DELETE DUPLICATES

def deleteDuplicates(array):
    newArray = []
    ignoredIndexes = []
    length = len(array)
    for i in range(0, length):
        for j in range(i+1, length):
            if(array[i] == array[j]):
                ignoredIndexes.append(j)
        if(not(i in ignoredIndexes)):
            newArray.append(array[i])

    return newArray


if __name__ == "__main__":

    print(deleteDuplicates([1, 2, 3, 4, 5, 62, 1, 2, 32, 1, 2, 3, 3, 2]))
```

### Output

```log title="output"
[1, 2, 3, 4, 5, 62, 32]
```
