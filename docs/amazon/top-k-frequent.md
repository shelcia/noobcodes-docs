---
sidebar_position: 24
tags: [amazon, array]
---

# Top K Frequent Words

### Problem Statement

Given an array of strings words and an integer k, return the k most frequent strings.

Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

#### Example 1:

```
Input: words = ["i","love","leetcode","i","love","coding"], k = 2
Output: ["i","love"]
Explanation: "i" and "love" are the two most frequent words.
Note that "i" comes before "love" due to a lower alphabetical order.
```

#### Example 2:

```
Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
Output: ["the","is","sunny","day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.
```

#### Constraints:

```
1 <= words.length <= 500
1 <= words[i].length <= 10
words[i] consists of lowercase English letters.
k is in the range [1, The number of unique words[i]]
```

### Code

```jsx title="Python Code"
from collections import Counter
import heapq

class Solution:
    def topKFrequent(self, words: List[str], k: int) -> List[str]:

        counts = Counter(words)
        print('Word counts:', counts)

        result = []
        for word in counts:
            print('Word being added:', word)
            if len(result) < k:
                heapq.heappush(result, (-counts[word], word))
                print(result)
            else:
                heapq.heappushpop(result, (-counts[word], word))
        result = [r[1] for r in result]

        return result
```
