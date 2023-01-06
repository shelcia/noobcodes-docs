---
sidebar_position: 817
tags: [Goldman Sachs]
---

# Course Schedule

### Problem Statement

There are a total of numCourses courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array prerequisites where` prerequisites[i] = [ai, bi]` indicates that you must take course bi first if you want to take course ai.

For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.
Return true if you can finish all courses. Otherwise, return false.

[Leetcode Link](https://leetcode.com/problems/course-schedule/)

#### Example 1:

```

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take.
To take course 1 you should have finished course 0. So it is possible.
```

#### Example 2:

```
Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take.
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
```

#### Constraints:

- `1 <= numCourses <= 2000`
- `0 <= prerequisites.length <= 5000`
- `prerequisites[i].length == 2`
- `0 <= ai, bi < numCourses`
- All the pairs `prerequisites[i]` are **unique**.

### Code

```java title="java Code"


    public boolean canFinish(int n, int[][] prerequisites) {
        ArrayList<Integer>[] G = new ArrayList[n];
        int[] degree = new int[n];
        ArrayList<Integer> bfs = new ArrayList();
        for (int i = 0; i < n; ++i) G[i] = new ArrayList<Integer>();
        for (int[] e : prerequisites) {
            G[e[1]].add(e[0]);
            degree[e[0]]++;
        }
        for (int i = 0; i < n; ++i) if (degree[i] == 0) bfs.add(i);
        for (int i = 0; i < bfs.size(); ++i)
            for (int j: G[bfs.get(i)])
                if (--degree[j] == 0) bfs.add(j);
        return bfs.size() == n;
    }
```
