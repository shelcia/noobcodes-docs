---
sidebar_position: 18
tags: [microsoft]
---

# Sliding Window Maximum

### Problem Statement

You are given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. You can only see the `k` numbers in the window. Each time the sliding window moves right by one position.

Return the **max sliding window**.

[Leetcode link](https://leetcode.com/problems/sliding-window-maximum/)

#### Example 1:

```log
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation:
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7

```

#### Example 2:

```log
Input: nums = [1], k = 1
Output: [1]
```

#### Constraints:

- `1 <= nums.length <= 105`
- `104 <= nums[i] <= 104`
- `1 <= k <= nums.length`

[LeetCode link](https://leetcode.com/problems/sliding-window-maximum/)

### Implementation

We will be using montonically decresing queue.

<!-- - **Space Complexity**: `O(n)` -->

- **Time Complexity**: `O(n)`

### Code

```python title="Python Code"

class Solution:
    def maxSlidingWindow (self, nums: List[int], k:int) -> List[int]:
        res = []

        # l is the pointed towards first element in the window and would be reassigned
        # if we moved out of bound of the window

        # r keep moving across all elements in th window
        l, r = 0, 0

        queue = collections.deque()

        # monotonically decresing queue

        while r < len(nums):

            # element in queue are just indexes
            # pop until we are within the window and the next element is greater than pre existing queue values thus we make sure when we pop the queue we get, the max element in window

            while queue and nums[queue[-1]] < nums[r]:
                queue.pop()

            # add the index in the queue
            queue.append(r)

            # remove left val from window if it is no longer in bound
            if l > queue[0]:
                queue.popleft()

            # window crossing the bound
            if r - l >= k - 1:
                # add the max element
                res.append(nums[queue[0]])
                l += 1

            # loop incrementation
            r += 1
        return res


if __name__ == "__main__":
    output = Solution()
    print(output.maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
    print(output.maxSlidingWindow([1], 1))
    print(output.maxSlidingWindow([1, -1], 1))
    print(output.maxSlidingWindow([9, 11], 2))
    print(output.maxSlidingWindow([4, -2], 2))
```

##### Output

```log title="Output"

[3,3,5,5,6,7]
[1]
[1,-1]
[11]
[4]

```

```jsx title="JAVA Code"
class Solution {
    public int[] maxSlidingWindow(int[] arr, int k) {
         // Sliding Window Algorithm using Deque :
    /* Time complexity : O(N) and Space Complexity O(k) */
        int n = arr.length;
        int ans[] = new int[n-k+1];
        Deque<Integer> deq = new ArrayDeque<>();
        int i = 0;
         // for first window from 0 to k-1.
        for(; i < k ; i++){

            while(!deq.isEmpty() && arr[i] >= arr[deq.peekLast()]){
                deq.removeLast();
            }
            deq.addLast(i);
        }
        int h = 0;
        for(; i < n ; i++){

            /* first add the head of the dequeue in ans
            * The element at the front of the,
            * queue is the largest element of
            * previous window, so print it
            */
            ans[h] = arr[deq.peekFirst()];
            //don't forget to h++ :)
            h++;

            // remove unnecessary elements which are not part of the window.
            while(!deq.isEmpty() && deq.peek() <= i-k){
                deq.removeFirst();
            }

            // do the same thing we did in first for loop
            /*
             * if the current element is greater than the last of the deq the remove the
             * unnecessary element and after while loop over add the index at last of * deq.
             */
            while(!deq.isEmpty() && arr[i] >= arr[deq.peekLast()]){
                deq.removeLast();
            }
            deq.addLast(i);
        }
        // the last window is remaining to add so add it.
        ans[h] = arr[deq.peekFirst()];

        // return the answer.
        return ans;
    }
}
```
