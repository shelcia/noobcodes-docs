---
sidebar_position: 137
tags: [facebook]
---

# Second Highest Salary

### Problem Statement

Table: Employee

| Column Name | Type |
| ----------- | ---- |
| id          | int  |
| salary      | int  |

```
id is the primary key column for this table.
Each row of this table contains information about the salary of an employee.
```

Write an SQL query to report the second highest salary from the Employee table. If there is no second highest salary, the query should report null.

The query result format is in the following example.

[Leetcode Link](https://leetcode.com/problems/second-highest-salary/)

#### Example 1:

```
Input:
Employee table:
```

| id  | salary |
| --- | ------ |
| 1   | 100    |
| 2   | 200    |
| 3   | 300    |

```
Output:
```

| SecondHighestSalary |
| ------------------- |
| 200                 |

#### Example 2:

```
Input:
Employee table:
```

| id  | salary |
| --- | ------ |
| 1   | 100    |

```
Output:
```

| SecondHighestSalary |
| ------------------- |
| null                |

#### Example 2:

```
Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false
```

### Code

```jsx title="MySQL"
# Write your MySQL query statement below
SELECT  MAX(SALARY) AS SecondHighestSalary FROM EMPLOYEE WHERE SALARY <>(SELECT MAX(SALARY) FROM EMPLOYEE);
```
