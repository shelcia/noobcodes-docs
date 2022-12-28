---
sidebar_position: 15
tags: [adobe]
---

# Self Dividing Numbers

### Problem Statement

A **self-dividing number** is a number that is divisible by every digit it contains.

For example, `128` is a self-dividing number because `128 % 1 == 0`, `128 % 2 == 0`, and `128 % 8 == 0`.

A **self-dividing** number is not allowed to contain the digit zero.

Given two integers `left` and `right`, return a list of all the self-dividing numbers in the range `[left, right]`.

[Leetcode Link](https://leetcode.com/problems/self-dividing-numbers)

#### Example 1:

```
Input: left = 1, right = 22
Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]
```

#### Example 2:
```
Input: left = 47, right = 85
Output: [48,55,66,77]
```

#### Constraints:

- `1 <= left <= right <= 104`

### Code

```python title="Python Code"
def selfDividingNumbers(self, left: int, right: int) -> List[int]:
        return [
            i for i in range(left, right + 1)
            if self.isDiv(i)
        ]
    
    def isDiv(self, i):
        num = i
        while i:
            rem = i%10
            if not rem: return False
            if num%rem != 0: return False
            i = i // 10
        return True
```

```jsx title="Java Code"
class Solution {
    public List<Integer> selfDividingNumbers(int left, int right) {
     List<Integer>res=new ArrayList();
        for(int i=left;i<=right;i++)
        {
            if(isDivide(i))
                res.add(i);
        }
        return res;
    }
    public boolean isDivide(int num)
    {
        int n=num;
        while(n>0)
        {
            int rem=n%10;
            if(rem==0 ||(num%rem)!=0)
                return false;
            n=n/10; 
        }
        return true;
    }
}
```

