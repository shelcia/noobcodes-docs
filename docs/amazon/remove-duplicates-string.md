---
sidebar_position: 19
tags: [amazon]
---

# Remove duplicates from a given string

### Problem Statement

Remove duplicates from a given string

### Code

```python title="Python Code"
def removeDuplicates(string):

    # arr = list(string)
    # arr = set(arr)

    # print(''.join(arr))

    print(''.join(set(list(string))))


removeDuplicates('eeeefggkkorss')
```
