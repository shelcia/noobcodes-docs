---
sidebar_position: 11
tags: [uber]
---

# Implement Stacks using Queue

### Problem Statement

Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

Implement the MyStack class:

- void push(int x) Pushes element x to the top of the stack.
- int pop() Removes the element on the top of the stack and returns it.
- int top() Returns the element on the top of the stack.
- boolean empty() Returns true if the stack is empty, false otherwise.

#### Notes:

- You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
- Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.

[Leetcode Link](https://leetcode.com/problems/implement-stack-using-queues/)

#### Example 1:

```
Input
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 2, 2, false]

Explanation
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // return 2
myStack.pop(); // return 2
myStack.empty(); // return False
```

#### Constraints:

- 1 <= x <= 9
- At most 100 calls will be made to push, pop, top, and empty.
- All the calls to pop and top are valid.

### Code

```python title="Python Code"

from Queue import Queue
class MyStack(object):
    def __init__(self):
        """
        initialize your data structure here.
        """
        self.q1, self.q2 = Queue(), Queue()
        return

    def push(self, x):
        """
        :type x: int
        :rtype: nothing
        """
        self.q1.put(x)
        return

    def pop(self):
        """
        :rtype: nothing
        """
        while self.q1.qsize() > 1:
            x = self.q1.get()
            self.q2.put(x)
        if self.q1.qsize() == 1:
            result = self.q1.get()
            self.q1, self.q2 = self.q2, self.q1
            return result


    def top(self):
        """
        :rtype: int
        """
        while self.q1.qsize() > 1:
            x = self.q1.get()
            self.q2.put(x)
        if self.q1.qsize() == 1:
            result = self.q1.get()
            self.q2.put(result)
            self.q1, self.q2 = self.q2, self.q1
            return result

    def empty(self):
        """
        :rtype: bool
        """
        return not bool(self.q1.qsize() + self.q2.qsize())
```
