/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
    const values = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}
   let res=0
   s.split('').forEach((num,i)=>{
       //if value num in front is less than next number (ex IV) subtract

       if(values[num] < values[s[i+1]]){
        res -= values[num]
        }
       else res += values[num]
   })
    
    return res
};