---
sidebar_position: 48
tags: [amazon]
---

# Strong password Checker

### Problem Statement

A `password` is considered strong if the below conditions are all met:

- It has at least `6` characters and at most `20` characters.
- It contains at least one lowercase letter, at least one uppercase letter, and at least one digit.
- It does not contain three repeating characters in a row (i.e., `"Baaabb0"` is weak, but `"Baaba0"` is strong).

Given a string `password`, return the minimum number of steps required to make `password` strong. if `password` is already strong, return 0.

In one step, you can:

- Insert one character to `password`,
- Delete one character from `password`, or
- Replace one character of `password` with another character.

[Leetcode Link](https://leetcode.com/problems/strong-password-checker)

#### Example 1:

```
Input: password = "a"
Output: 5
```

#### Example 2:

```
Input: password = "aA1"
Output: 3
```

#### Example 3:

```
Input: password = "1337C0d3"
Output: 0
```

#### Constraints:

- `1 <= password.length <= 50`
- `password` consists of letters, digits, dot `'.'` or exclamation mark `'!'`.`

### Code

```python title="Python Code"

import itertools

class Solution:
    lowercase = set('abcdefghijklmnopqrstuvwxyz')
    uppercase = set('ABCDEFGHIJKLMNOPQRSTUFVWXYZ')
    digit = set('0123456789')

    def strongPasswordChecker(self, s: str) -> int:
        characters = set(s)

        needs_lowercase = not (characters & self.lowercase)
        needs_uppercase = not (characters & self.uppercase)
        needs_digit = not (characters & self.digit)
        num_required_type_replaces = int(needs_lowercase + needs_uppercase + needs_digit)

        num_required_inserts = max(0, 6 - len(s))
        num_required_deletes = max(0, len(s) - 20)

        groups = [len(list(grp)) for _, grp in itertools.groupby(s)]

        def apply_best_delete():
            argmin, _ = min(
                enumerate(groups),
                key=lambda it: it[1] % 3 if it[1] >= 3 else 10 - it[1],
            )
            groups[argmin] -= 1

        for _ in range(num_required_deletes):
            apply_best_delete()

        num_required_group_replaces = sum(
            group // 3
            for group in groups
        )

        return (
            num_required_deletes
            + max(
                num_required_type_replaces,
                num_required_group_replaces,
                num_required_inserts,
            )
        )
```

```jsx title="Java Code"
public class Solution {
    public int strongPasswordChecker(String s) {

        if(s.length()<2) return 6-s.length();

        //Initialize the states, including current ending character(end), existence of lowercase letter(lower), uppercase letter(upper), digit(digit) and number of replicates for ending character(end_rep)
        char end = s.charAt(0);
        boolean upper = end>='A'&&end<='Z', lower = end>='a'&&end<='z', digit = end>='0'&&end<='9';


        int end_rep = 1, change = 0;
        int[] delete = new int[3];

        for(int i = 1;i<s.length();++i){
            if(s.charAt(i)==end) ++end_rep;
            else{
                change+=end_rep/3;
                if(end_rep/3>0) ++delete[end_rep%3];
                //updating the states
                end = s.charAt(i);
                upper = upper||end>='A'&&end<='Z';
                lower = lower||end>='a'&&end<='z';
                digit = digit||end>='0'&&end<='9';
                end_rep = 1;
            }
        }
        change+=end_rep/3;
        if(end_rep/3>0) ++delete[end_rep%3];

        //The number of replcement needed for missing of specific character(lower/upper/digit)
        int check_req = (upper?0:1)+(lower?0:1)+(digit?0:1);

        if(s.length()>20){
            int del = s.length()-20;

            //Reduce the number of replacement operation by deletion
            if(del<=delete[0]) change-=del;
            else if(del-delete[0]<=2*delete[1]) change-=delete[0]+(del-delete[0])/2;
            else change-=delete[0]+delete[1]+(del-delete[0]-2*delete[1])/3;

            return del+Math.max(check_req,change);
        }
        else return Math.max(6-s.length(), Math.max(check_req, change));
    }
}
```
