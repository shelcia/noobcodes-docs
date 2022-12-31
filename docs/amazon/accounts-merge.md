---
sidebar_position: 121
tags: [amazon]
---

# Accounts Merge

### Problem Statement

Given a list of accounts where each element accounts[i] is a list of strings, where the first element accounts[i][0] is a name, and the rest of the elements are emails representing emails of the account.

Now, we would like to merge these accounts. Two accounts definitely belong to the same person if there is some common email to both accounts. Note that even if two accounts have the same name, they may belong to different people as people could have the same name. A person can have any number of accounts initially, but all of their accounts definitely have the same name.

After merging the accounts, return the accounts in the following format: the first element of each account is the name, and the rest of the elements are emails in sorted order. The accounts themselves can be returned in any order.

[Leetcode link](https://leetcode.com/problems/accounts-merge)

#### Example 1:

```
Input: accounts = [["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]

Output: [["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
```

##### Explanation:

- The first and second John's are the same person as they have the common email **"johnsmith@mail.com"**.
- The third _John_ and _Mary_ are different people as none of their email addresses are used by other accounts.
- We could return these lists in any order, for example the answer `[['Mary', 'mary@mail.com']`, `['John', 'johnnybravo@mail.com']`,
  `['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com']]` would still be accepted.

#### Example 2:

```
Input: accounts = [["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe1@m.co"],["Kevin","Kevin3@m.co","Kevin5@m.co","Kevin0@m.co"],["Ethan","Ethan5@m.co","Ethan4@m.co","Ethan0@m.co"],["Hanzo","Hanzo3@m.co","Hanzo1@m.co","Hanzo0@m.co"],["Fern","Fern5@m.co","Fern1@m.co","Fern0@m.co"]]

Output: [["Ethan","Ethan0@m.co","Ethan4@m.co","Ethan5@m.co"],["Gabe","Gabe0@m.co","Gabe1@m.co","Gabe3@m.co"],["Hanzo","Hanzo0@m.co","Hanzo1@m.co","Hanzo3@m.co"],["Kevin","Kevin0@m.co","Kevin3@m.co","Kevin5@m.co"],["Fern","Fern0@m.co","Fern1@m.co","Fern5@m.co"]]
```

#### Constraints:

- `1 <= accounts.length <= 1000`
- `2 <= accounts[i].length <= 10`
- `1 <= accounts[i][j].length <= 30`
- `accounts[i][0]` consists of English letters.
- `accounts[i][j]` (for `j > 0`) is a valid email.

### Code

```python title="Python Code"
from collections import defaultdict
class Solution(object):
    def accountsMerge(self, accounts):
        """
        :type accounts: List[List[str]]
        :rtype: List[List[str]]
        """
        '''
        Idea is to create a adj matrix of connected emails with each other
        after that traverse like a graph. the connected vertices are of same person. Voila

        '''
        adj_list, account_map = self.create_adj_list(accounts)
        visited = set()
        results = []
        for vertex in adj_list.keys():
            if vertex not in visited:
                visited.add(vertex)
                # call each vertex in adj_list and return result will be all the emails that are connected to each other
                # append that result with given account name
                results.append([str(account_map[vertex])] + sorted(list(self.create_common_list(adj_list, str(vertex), set(), visited))))
        return(results)

    def create_common_list(self, adj_list, vertex, result, visited):
        # add to result
        result.add(vertex)
        visited.add(vertex)
        # go deep and find out all nodes that are connected to vertex
        for elem in adj_list[vertex]:
            # if vertex present we don't to traverse again
            if str(elem) in visited:
                continue
            self.create_common_list(adj_list, str(elem), result, visited)
        return result

    def create_adj_list(self, accounts):
        adj_list = defaultdict(list)
        account_map = {}
        for account in accounts:
            emails = account[1:]
            for email in emails:
                # add emails(vertices ) that are connected to given email
                adj_list[email] += emails
                # add account name for each email for appending later
                account_map[email] = account[0]
        return adj_list, account_map


```
