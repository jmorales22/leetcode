function singleNumber(nums) {
	return nums.reduce((prev, curr) => prev ^ curr, 0);
}

const singleNumber = (nums) => {
    let seen = new Set();
    for(const i of nums){
       seen.has(i) ? seen.delete(i):seen.add(i);
    }
    return Array.from(seen.values())[0];
};

var singleNumber = function(nums) {
    let result = 0;
    for(let i=0; i<nums.length; i++){
        result = result ^ nums[i];
    }
    return result;
};

var singleNumber = function(nums) {
    let newArray = [];
   
    for(let i = 0; i < nums.length; i++){
     if(newArray.includes(nums[i])){
       newArray.splice(newArray.indexOf(nums[i]),1)
     } else{
       newArray.push(nums[i])
     }
    }
    return newArray;
   };