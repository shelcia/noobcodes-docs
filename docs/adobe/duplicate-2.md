---
sidebar_position: 8
tags: [adobe]
---

# Contains Duplicate II

### Problem Statement

Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that `nums[i] == nums[j]` and `abs(i - j) <= k`.

[LeetCode link](https://leetcode.com/problems/contains-duplicate-ii/)

#### Example 1:

```
Input: nums = [1,2,3,1], k = 3
Output: true
```

#### Example 2:

```
Input: nums = [1,0,1,1], k = 1
Output: true
```

#### Example 3:

```
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
```

#### Constraints:

- `1 <= nums.length <= 105`
- `-109 <= nums[i] <= 109`
- `0 <= k <= 105`

### Code

```jsx title="Java Code"
class Solution {
    private static class Node implements Comparable<Node> {
        private int value, index;
        public Node(int value, int index) {
            this.value = value;
            this.index = index;
        }

        public int compareTo(Node that) {
            return this.value - that.value;
        }
    }

    public boolean containsNearbyDuplicate(int[] nums, int k) {
        int n = nums.length;
        Node[] nodes = new Node[n];
        for (int i = 0; i < n; i++) {
            nodes[i] = new Node(nums[i], i);
        }
        Arrays.sort(nodes);
        for (int i = 1; i < n; i++) {
            if (nodes[i].value == nodes[i - 1].value && nodes[i].index - nodes[i - 1].index <= k) return true;
        }
        return false;
    }
}
```
