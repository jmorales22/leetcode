var smallerNumbersThanCurrent = function (nums) {
    let countArray = [];
    let count = 0;
  
    for (let i = 0; i < nums.length; i++) {
      nums.forEach((num) => {
        if (nums[i] > num && nums[i] !== num) {
          count += 1;
        }
      });
      countArray.push(count);
      count = 0;
    }
    return countArray;
  };

  //other answers from the discussion
  var smallerNumbersThanCurrent = function(nums) {
    const sorted = [...nums].sort((a, b) => b - a);
    const map = {};
    
    sorted.forEach((item, index) => {
       map[item] = nums.length - index - 1;
    });
    
    return nums.map((item) => map[item]);
};

var smallerNumbersThanCurrent = function(nums) {
    const sortedNums = [...nums].sort((a,b) => {return b-a});
    const len = nums.length;
    nums = nums.map(x =>{
        return len - sortedNums.lastIndexOf(x) - 1;
    })
    return nums;
};