var runningSum = function (nums) {
    let newArray = [];
    let newNum = nums[0];
  
    for (let i = 0; i < nums.length; i++) {
      newArray.push(newNum);
      newNum = nums[i + 1] + newNum;
    }
    return newArray;
  };