class Solution:
    def romanToInt(self, s: str) -> int:
        values={
            "I":1,
            "V":5,
            "X":10,
            "L":50,
            "C":100,
            "D":500,
            "M":1000
            }
        
        N = len(s)
        i = N-1
        output = 0
        while i>=0:
            if i< N-1 and values[s[i]] < values[s[i+1]]:
                output -= values[s[i]]
            else:
                output += values[s[i]]
            i-=1
            
        return output
            
        