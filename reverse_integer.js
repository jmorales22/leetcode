//my really long solution
var reverse = function (x) {
    if(x === 0) return 0;
    let newString = x.toString();
    let arr = [...newString];
    let length = arr.length - 1;
      
      for(let i = 0; i <= length; i++){
       let temp = arr[i];
       arr[i] = arr[length];
       arr[length] = temp;
       length--;
      }
      if(arr.includes('-')){
        let temp = arr.pop();
        arr.unshift(temp);
      }
      if(arr.join('') < -2147483648 || arr.join('') >  2147483648) return 0;
      return arr.join('');
  };

  //Other solutions on leet code
  var reverse = function(x) {
    const isNegative = x < 0;
    const xStrArr = Math.abs(x).toString().split("");
    const reversStr = xStrArr.reverse().join("");
    const num = Number(reversStr);
    if (isNegative && num > Math.pow(2, 31)) {
        return 0;
    }
    if (!isNegative && num > Math.pow(2, 31) - 1) {
        return 0;
    }
    return isNegative ? -num : num;
};