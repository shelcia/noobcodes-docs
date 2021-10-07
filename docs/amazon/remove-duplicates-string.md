---
sidebar_position: 6
---

# Remove duplicates from a given string

### Problem Statement

Remove duplicates from a given string

### Code

```jsx title="python code"
def removeDuplicates(string):

    # arr = list(string)
    # arr = set(arr)

    # print(''.join(arr))

    print(''.join(set(list(string))))


removeDuplicates('eeeefggkkorss')
```
