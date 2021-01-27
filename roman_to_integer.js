//My really long solutions
var romanToInt = function (s) {
    let newArray = [...s];
    let total = 0;
  
    let romanNumerals = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
    newArray.forEach((num) => {
      total += romanNumerals[num];
    });
    if (s.includes("IV")) {
      total -= 2;
    }
    if (s.includes("IX")) {
      total -= 2;
    }
    if (s.includes("XC")) {
      total -= 20;
    }
    if (s.includes("XL")) {
      total -= 20;
    }
    if (s.includes("CM")) {
      total -= 200;
    }
    if (s.includes("CD")) {
      total -= 200;
    }
  
    return total;
  };

  //some other solutions from leetcode

let romanToInt = function(s) {
    let romanToInt = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    }

    let total = 0;

    for (let i = 0; i < s.length; i++) {
      let currentInt = romanToInt[s.charAt(i)];
      let nextInt = romanToInt[s.charAt(i + 1)];

      if (nextInt) {
        if (currentInt >= nextInt) {
          total += currentInt;
        } else {
          total += (nextInt - currentInt);
          i++;
        }
      } else {
        total += currentInt;
      }
    }

    return total;
};

const romanToInt = s => {
    if (!s || s.length === 0) {
      return 0;
    }
  
    const map = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]]);
  
    let i = s.length - 1;
    let result = map.get(s[i]);
  
    while (i > 0) {
      const curr = map.get(s[i]);
      const prev = map.get(s[i - 1]);
  
      if (prev >= curr) {
        result += prev;
      } else {
        result -= prev;
      }
  
      i--;
    }
  
    return result;
  };