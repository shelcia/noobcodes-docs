---
sidebar_position: 126
tags: [amazon]
---

# Course Schedule II

### Problem Statement

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

- For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.

Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

[Leetcode link](https://leetcode.com/problems/course-schedule-ii)

#### Example 1:

```
Input: numCourses = 2, prerequisites = [[1,0]]
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].
```

#### Example 2:

```
Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
Output: [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].
```

#### Example 3:

```
Input: numCourses = 1, prerequisites = []
Output: [0]
```

#### Constraints:

- 1 <= numCourses <= 2000
- 0 <= prerequisites.length <= numCourses \* (numCourses - 1)
- prerequisites[i].length == 2
- 0 <= ai, bi < numCourses
- ai != bi
- All the pairs [ai, bi] are distinct.

### Code

```python title="Python Code"

from collections import defaultdict
class Solution(object):
    def findOrder(self, numCourses, prerequisites):
        """
        :type numCourses: int
        :type prerequisites: List[List[int]]
        :rtype: bool
        """
        # Idea is to create topological sort using dependencies given. If we are able to create it then its possible otherwise not possible
        # Maintain two set visited, complete_explore
        # if all of neighbours are explored then add to complete_explore and remove from visited
        # if vertex and its neighbour are in visited (partially visited) that means somehow we reached vertex again as both of them are still partially explored and we have dependenices on each other via some vertices or directly
        # then its a cycle which means we can't create topological order based on given prereq..
        # Here we go
        # stack contains dependecies path just extra thing
        # if visited is not empty that means there is cycle
        adj_matrix = self.create_adj_matrix(prerequisites)
        complete_explore = set()  # To maintain completely explored vertex
        visited = set()  # partially explored vertex
        stack = []  # topological order
        for elem in range(numCourses):
            if elem not in visited and elem not in complete_explore:  # If vertex is not explored completely or partially then explore it
                self.find_topological_order(elem, adj_matrix, visited, stack, complete_explore)
        if not visited:  # if partially visited set is  empty then Voila, we have a order
            return stack
        else:
            return []

    def find_topological_order(self, vertex, adj_matrix, visited, stack, complete_explore):
        visited.add(vertex)  # add to partially visited
        for elem in adj_matrix[vertex]:  # adj vertices
            if elem not in visited and elem not in complete_explore:  # if vertex not in partially visited and not in completely explored set
                self.find_topological_order(elem, adj_matrix, visited, stack, complete_explore)
            if elem in visited and vertex in visited:  # if vertex and its neighbour in visited then its cycle
                return False
        complete_explore.add(
            vertex)  # add to completely explored as we have reached to end and there are no more edges to explore
        visited.remove(vertex)  # remove from partially removed
        stack.append(vertex)  # add to path

    def create_adj_matrix(self, prereq):
        adj_matrix = defaultdict(list)
        for elem in prereq:
            adj_matrix[elem[0]].append(elem[1])

        return adj_matrix

```
