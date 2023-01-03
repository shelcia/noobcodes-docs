---
sidebar_position: 11
tags: [airbnb]
---

# Flatten Nested List Iterator

### Problem Statement

You are given a nested list of integers nestedList. Each element is either an integer or a list whose elements may also be integers or other lists. Implement an iterator to flatten it.

Implement the NestedIterator class:

- `NestedIterator(List<NestedInteger> nestedList)` Initializes the iterator with the nested list nestedList.
- `int next()` Returns the next integer in the nested list.
- `boolean hasNext()` Returns true if there are still some integers in the nested list and false otherwise.

Your code will be tested with the following pseudocode:

```
initialize iterator with nestedList
res = []
while iterator.hasNext()
    append iterator.next() to the end of res
return res
```

If res matches the expected flattened list, then your code will be judged as correct.

[Leetcode Link](https://leetcode.com/problems/flatten-nested-list-iterator/)

#### Example 1:

```
Input: nestedList = [[1,1],2,[1,1]]
Output: [1,1,2,1,1]
Explanation: By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,1,2,1,1].
```

#### Example 2:

```
Input: nestedList = [1,[4,[6]]]
Output: [1,4,6]
Explanation: By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,4,6].
```

#### Constraints:

- 1 <= nestedList.length <= 500
- The values of the integers in the nested list is in the range [-10<sup>6</sup>, 10<sup>6</sup>].

### Code

```jsx title="Python"
class NestedIterator(object):

    def __init__(self, nestedList):
        """
        Initialize your data structure here.
        :type nestedList: List[NestedInteger]
        """
        self.stack = nestedList[::-1]
        
    def next(self):
        """
        :rtype: int
        """
        return self.stack.pop().getInteger()
        
    def hasNext(self):
        """
        :rtype: bool
        """
        while self.stack:
            top = self.stack[-1]
            if top.isInteger():
                return True
            self.stack = self.stack[:-1] + top.getList()[::-1]
        return False
```
