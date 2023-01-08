---
sidebar_position: 11
tags: [paypal]
---

# Peeking Iterator

### Problem Statement

Design an iterator that supports the `peek` operation on an existing iterator in addition to the `hasNext` and the `next` operations.

Implement the `PeekingIterator` class:

- `PeekingIterator(Iterator<int> nums)` Initializes the object with the given integer iterator `iterator`.
- `int next()` Returns the next element in the array and moves the pointer to the next element.
- `boolean hasNext()` Returns `true` if there are still elements in the array.
- `int peek()` Returns the next element in the array **without** moving the pointer.

**Note**: Each language may have a different implementation of the constructor and `Iterator`, but they all support the `int next()` and `boolean hasNext()` functions.

#### Example 1:

```
Input
["PeekingIterator", "next", "peek", "next", "next", "hasNext"]
[[[1, 2, 3]], [], [], [], [], []]
Output
[null, 1, 2, 2, 3, false]

Explanation
PeekingIterator peekingIterator = new PeekingIterator([1, 2, 3]); // [1,2,3]
peekingIterator.next();    // return 1, the pointer moves to the next element [1,2,3].
peekingIterator.peek();    // return 2, the pointer does not move [1,2,3].
peekingIterator.next();    // return 2, the pointer moves to the next element [1,2,3]
peekingIterator.next();    // return 3, the pointer moves to the next element [1,2,3]
peekingIterator.hasNext(); // return False
```

#### Contraints:

- 1 <= nums.length <= 1000
- 1 <= nums[i] <= 1000
- All the calls to next and peek are valid.
- At most 1000 calls will be made to next, hasNext, and peek.

[Leetcode Link](https://leetcode.com/problems/peeking-iterator/)

### Code

```python title="Python"
class PeekingIterator:
    def __init__(self, iterator):
        self.iterator = iterator
        self.buffer = self.iterator.next() if self.iterator.hasNext() else None

    def peek(self):
        return self.buffer

    def next(self):
        tmp = self.buffer
        self.buffer = self.iterator.next() if self.iterator.hasNext() else None
        return tmp

    def hasNext(self):
        return self.buffer != None
```
