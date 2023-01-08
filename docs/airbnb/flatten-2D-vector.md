---
sidebar_position: 7
tags: [airbnb]
---

# Flatten 2D Vector

### Problem Statement

Design an iterator to realize the function of flattening two-dimensional vector.

#### Example 1:

```
Input:[[1,2],[3],[4,5,6]]
Output:[1,2,3,4,5,6]
```

#### Example 2:

```
Input:[[7,9],[5]]
Output:[7,9,5]
```

### Code

```python title="Python"
class Vector2D(object):

    # @param vec2d {List[List[int]]}
    def __init__(self, vec2d):
        self.array = []
        while vec2d:
            ivec2d = vec2d.pop()
            while ivec2d:
                self.array.append(ivec2d.pop())

    # @return {int} a next element
    def next(self):
        if self.hasNext():
            return self.array.pop()


    # @return {boolean} true if it has next element
    # or false
    def hasNext(self):
        if self.array:
            return True
        return False


# Your Vector2D object will be instantiated and called as such:
# i, v = Vector2D(vec2d), []
# while i.hasNext(): v.append(i.next())
```
