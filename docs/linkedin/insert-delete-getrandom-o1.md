---
sidebar_position: 29
tags: [LinkedIn]
---

# Insert Delete GetRandom O(1)

### Problem Statement

Implement the `RandomizedSet` class:

- `RandomizedSet()` Initializes the `RandomizedSet` object.
- `bool insert(int val)` Inserts an item `val` into the set if not present. Returns `true` if the item was not present, `false` otherwise.
- `bool remove(int val)` Removes an item `val` from the set if present. Returns `true` if the item was present, `false` otherwise.
- `int getRandom()` Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the **same probability** of being returned.

You must implement the functions of the class such that each function works in **average** O(1) time complexity.

[Leetcode Link](https://leetcode.com/problems/insert-delete-getrandom-o1/)

#### Example 1:

```
Input
["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
[[], [1], [2], [2], [], [1], [2], []]
Output
[null, true, false, true, 2, true, false, 2]

Explanation
RandomizedSet randomizedSet = new RandomizedSet();
randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
randomizedSet.insert(2); // 2 was already in the set, so return false.
randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.
```

#### Constraints:

- -2<sup>31</sup> <= val <= 2<sup>31</sup> - 1
- At most 2 * 10<sup>5</sup> calls will be made to insert, remove, and getRandom.
- There will be at least one element in the data structure when getRandom is called.

### Code

```jsx title="Python"
class RandomizedSet:

    def __init__(self):
        # Store the index of each val in self.arr.
        self.indices = {}
        # Store all vals.
        self.arr = []

    def insert(self, val: int) -> bool:
        # Return False if val is already present as requested.
        if val in self.indices: return False
        
        # Append val to the array.
        # Store its index in the hashmap
        self.arr.append(val)
        self.indices[val] = len(self.arr)-1
        return True
    
    def remove(self, val: int) -> bool:
        # Return False if val is not present as requested.
        if val not in self.indices: return False
        
        # Get the index of the val that needs to be removed.
        i = self.indices[val]
        
        # Update the index of arr[-1] in the indices.
        self.indices[self.arr[-1]] = i
        
        # Move the last element to the i th position.
        self.arr[i] = self.arr[-1]
        
        # remove the last element, and remove the index of val
        self.indices.pop(val)
        self.arr.pop()
        
        return True

    def getRandom(self) -> int:
        return random.choice(self.arr)
```
