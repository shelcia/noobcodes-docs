class Solution:
    def multiply(self, num1: str, num2: str) -> str:
        if num1 == "0" or num2 == "0":
            return "0"
        
        l1, l2 = len(num1), len(num2)
        l3 = l1 + l2
        
        results = [0 for i in range(l3)]
        
        
        for i in range(l1 - 1, -1, -1):
            carry = 0
            for j in range(l2 - 1, -1, -1):
                results[i + j + 1] += carry + int(num1[i]) * int(num2[j])
                
                carry = results[i + j + 1] // 10
                results[i + j + 1] %= 10
                
            results[i] = carry
            
            
        i = 0 
        while i < l3 and results[i] == 0:
            i += 1
            
        results = results[i:]
        
        return '0' if not results else ''.join(str(i) for i in results)