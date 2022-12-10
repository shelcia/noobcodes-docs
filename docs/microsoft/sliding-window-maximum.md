---
sidebar_position: 18
tags: [microsoft]
---

# Sliding Window Maximum

### Problem Statement

You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the **max sliding window**.

#### Example 1:

![image](https://user-images.githubusercontent.com/77881638/206825193-ff045127-2fd1-4488-84a6-d2875240422b.png)

#### Example 2:

![image](https://user-images.githubusercontent.com/77881638/206825216-e29475fd-bc59-4c58-903d-b56e057e32b1.png)

##### Constraints:

- `1 <= nums.length <= 105`
- `104 <= nums[i] <= 104`
- `1 <= k <= nums.length`

### Code

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
