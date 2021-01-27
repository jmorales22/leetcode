var reverseString = function(s) {
    let arr = s;
    let length = s.length - 1;
    
    for(let i = 0; i <= length; i++){
     let temp = arr[i];
     arr[i] = arr[length];
     arr[length] = temp;
     length--;
    }
    return arr;
  };