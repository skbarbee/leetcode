/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

  let maxLength = 0;
  let start = 0;
  const seen = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (seen.has(char) && seen.get(char) >= start) {
      start = seen.get(char) + 1;
    }
    seen.set(char, i);
    maxLength = Math.max(maxLength, i - start + 1);
  }

  return maxLength;

};