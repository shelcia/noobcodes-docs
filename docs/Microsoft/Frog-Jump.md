---
sidebar_position: 2
tags: [microsoft]
---

# Frog Jump

### Problem Statement

A frog is crossing a river. The river is divided into some number of units, and at each unit, there may or may not exist a stone. The frog can jump on a stone, but it must not jump into the water.

Given a list of stones' positions (in units) in sorted ascending order, determine if the frog can cross the river by landing on the last stone. Initially, the frog is on the first stone and assumes the first jump must be 1 unit.

If the frog's last jump was k units, its next jump must be either k - 1, k, or k + 1 units. The frog can only jump in the forward direction.


[Leetcode link](https://leetcode.com/problems/frog-jump/description/)

### Code

```jsx title="Java Code"


public boolean canCross(int[] stones) {
    boolean[][] dp = new boolean[stones.length][stones.length];
    dp[0][0] = true;
    for(int i = 0; i < stones.length; i++){
        for(int prevGap = 0; prevGap <= i; prevGap++){
            if(dp[i][prevGap]){
                for(int next = i + 1; next < stones.length && stones[next] - stones[i] <= prevGap + 1 ; next++){
                    if(prevGap - 1 > stones[next] - stones[i]) continue;
                    int gap = stones[next] - stones[i];
                    dp[next][gap] = true;
                }
            }
        }
    }
    for(boolean b : dp[dp.length - 1])
        if(b) return true;
    return false;
}
```
