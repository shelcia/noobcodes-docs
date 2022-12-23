---
sidebar_position: 12
tags: [adobe]
---

# Print In Order

### Problem Statement

Suppose we have a class:

```jsx
public class Foo {
  public void first() { print("first"); }
  public void second() { print("second"); }
  public void third() { print("third"); }
}
```

The same instance of Foo will be passed to three different threads. Thread A will call `first()`, thread B will call `second()`, and thread C will call `third()`. Design a mechanism and modify the program to ensure that `second()` is executed after `first()`, and `third()` is executed after `second()`.

Note:

We do not know how the threads will be scheduled in the operating system, even though the numbers in the input seem to imply the ordering. The input format you see is mainly to ensure our tests' comprehensiveness.

[LeetCode link](hhttps://leetcode.com/problems/print-in-order/)

#### Example 1:

```
Input: nums = [1,2,3]
Output: "firstsecondthird"
Explanation: There are three threads being fired asynchronously. The input [1,2,3] means thread A calls first(), thread B calls second(), and thread C calls third(). "firstsecondthird" is the correct output.
```

#### Example 2:

```
Input: nums = [1,3,2]
Output: "firstsecondthird"
Explanation: The input [1,3,2] means thread A calls first(), thread B calls third(), and thread C calls second(). "firstsecondthird" is the correct output.
```

#### Constraints:

- nums is a permutation of `[1, 2, 3]`.

### Code

```jsx title="Java Code"
class Foo {
    private volatile int flag;

    public Foo() {
        flag = 1;
    }

    public void first(Runnable printFirst) throws InterruptedException {
        for(;;) {
        	if (flag==1) {
        		printFirst.run();
                flag = 2;
                break;
        	}
        }
    }

    public void second(Runnable printSecond) throws InterruptedException {
    	for(;;) {
    		if (flag==2) {
    			printSecond.run();
                flag=3;
                break;
    		}
    	}
    }

    public void third(Runnable printThird) throws InterruptedException {
    	for(;;) {
    		if (flag==3) {
    			printThird.run();
                flag = 1;
                break;
    		}
    	}
    }
}
```
