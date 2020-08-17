var shuffle = function(nums, n) {
    let endArray = nums.splice(2*n/2,n);
    let finalArray = [];
   
    for(let i = 0; i < nums.length; i++){
      finalArray.push(nums[i], endArray[i])
   }
   return finalArray;    
  };
  