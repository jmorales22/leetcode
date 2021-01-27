  //solution on leetcode
  var firstUniqChar = function(s) {
    for(i=0;i<s.length;i++){
        if (s.indexOf(s[i])===s.lastIndexOf(s[i])){
           return i;
       } 
    }
    return -1;
 };

//Doesnt' work

var firstUniqChar = function(s) {
    let arr = [...s];
    let count = 1;
 
    for(let i = 0; i < s.length; i++){
      for(let j = i+1; j < s.length; j++){
        console.log('arr[i]', arr[i])
        console.log('arr[j]', arr[j])
        if(arr[i] === arr[j]){
          count++;
        } 
        if(count === 1){
          return i;
        }
      }
    }
    return -1;
 };
 
 console.log(firstUniqChar('aabbccddf'));

 //Another attempt that doesn't work
 var firstUniqChar = function(s) {
    let count = {};
  
    for(let i = 0; i < s.length; i++){
      const curr = s[i];
      if(count[curr] == null){
        count[curr] = 1;
      } else{
        count[curr]++
      }
    }
    for(let j = 0; j < s.length; j++){
     const start = s[j];
     if(count[start] === 1){
       return s.indexOf(count[start])
     }
    }
  };

