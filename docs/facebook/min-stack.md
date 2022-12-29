---
sidebar_position: 21
tags: [facebook]
---

# Min Stack

### Problem Statement

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

- MinStack() initializes the stack object.
- void push(int val) pushes the element val onto the stack.
- void pop() removes the element on the top of the stack.
- int top() gets the top element of the stack.
- int getMin() retrieves the minimum element in the stack.

You must implement a solution with O(1) time complexity for each function.

[Leetcode link](https://leetcode.com/problems/min-stack)

#### Example 1:

```
Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
```

#### Constraints:

- -2<sup>31</sup> <= val <= 2<sup>31</sup> - 1
- Methods pop, top and getMin operations will always be called on non-empty stacks.
- At most 3 \* 104 calls will be made to push, pop, top, and getMin.

### Code

```python title="Python Code"
class MinStack(object):

    def __init__(self):
        """
        initialize your data structure here.
        """
        self.stack = []


    def push(self, x):
        """
        :type x: int
        :rtype: void
        """
        return self.stack.insert(0,x)


    def pop(self):
        """
        :rtype: void
        """
        temp = self.stack[0]
        del self.stack[0]
        return temp


    def top(self):
        """
        :rtype: int
        """
        return self.stack[0]


    def getMin(self):
        """
        :rtype: int
        """
        return min(self.stack)
```
