---
sidebar_position: 811
tags: [Goldman Sachs]
---

#   LRU Cache

### Problem Statement

Design a data structure that follows the constraints of a Least Recently Used `(LRU)` cache.

Implement the `LRUCache` class:

`LRUCache(int capacity)` Initialize the LRU cache with positive size capacity.
`int get(int key)` Return the value of the key if the key exists, otherwise return -1.
`void put(int key, int value)` Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.


[Leetcode Link](https://leetcode.com/problems/lru-cache/)

#### Example 1:

```
Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4
```

#### Constraints:
```
1 <= capacity <= 3000
0 <= key <= 104
0 <= value <= 105
At most 2 * 105 calls will be made to get and put.
```

### Code

```java title="java Code"

class LRUCache {
    LinkedNodeList list;
    Map<Integer, Node> map;
    Integer cap;
    public LRUCache(int capacity) {
        list = new LinkedNodeList();
        map = new HashMap(capacity);
        cap = capacity;
    }
    
    public int get(int key) {
        Node node = map.get(key);
        if(node == null){
            return -1;
        }
        list.moveToHead(node);
        return node.val;
    }
    
    public void put(int key, int value) {
        Node node = map.get(key);
        if(node != null){
            list.moveToHead(node);
            node.val = value;

        }else{
             Node newNode = new Node(key, value);
            if(map.size() == cap){
                Node tail = list.getTail();
                map.remove(tail.key);
                list.removeTail();
            }
            map.put(key, newNode);
            list.addToHead(newNode);
        }
    }
}

class LinkedNodeList{
    Node dummyHead;
    Node dummyTail;
    
    LinkedNodeList(){
        dummyHead = new Node(0,0);
        dummyTail = new Node(0,0);
        dummyHead.next = dummyTail;
        dummyTail.prev = dummyHead;
    }
    
    void moveToHead(Node node){
        node.prev.next = node.next;
        node.next.prev = node.prev;
        addToHead(node);
    }
    
    void addToHead(Node node){
        Node tmp = dummyHead.next ;
        dummyHead.next = node;
        node.next = tmp;
        node.prev = dummyHead;
        tmp.prev = node;
    }
    
    void removeTail(){
        Node newTail = dummyTail.prev.prev;
        newTail.next = dummyTail;
        dummyTail.prev = newTail;
    }
    
    Node getTail(){
        return dummyTail.prev;
    }
    
}

 class Node{
        int key;
        int val;
        Node next;
        Node prev;
        Node(int key, int value){
            this.key = key;
            this.val =value;
        }
}
```

