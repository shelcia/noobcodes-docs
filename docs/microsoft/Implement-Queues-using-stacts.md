  def __init__(self):
        """
        Initialize your data structure here.
        """
        self.push_stack = []
        self.pop_stack = []

    def push(self, x: int) -> None:
        """
        Push element x to the back of queue.
        """
        self.push_stack.append(x)

    def pop(self) -> int:
        """
        Removes the element from in front of queue and returns that element.
        """
        if self.empty(): return
        if len(self.pop_stack):
            return self.pop_stack.pop()
        else:
            while len(self.push_stack):
                self.pop_stack.append(self.push_stack.pop())
        return self.pop_stack.pop()

    def peek(self) -> int:
        """
        Get the front element.
        """
        if self.empty(): return
        if len(self.pop_stack):
            return self.pop_stack[-1]
        else:
            while len(self.push_stack):
                self.pop_stack.append(self.push_stack.pop())
        return self.pop_stack[-1]

    def empty(self) -> bool:
        """
        Returns whether the queue is empty.
        """
        return len(self.push_stack)==False and len(self.pop_stack) == False