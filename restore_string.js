var restoreString = function (s, indices) {
    let newArray = [];
  
    for (let i = 0; i < s.length; i++) {
      indices.forEach((num) => {
        if (i === num) {
          newArray.push(s[indices.indexOf(num)]);
        }
      });
    }
    return newArray.join("");
  };

  //Similar but better answer on discussion
  var restoreString = function(s, indices) {
    const output = [];
    for(let i = 0; i < s.length; i++) {
        output[indices[i]] = s[i];
    }
    return output.join("");
};

//Also similar but better
var restoreString = function(s, indices) {
    const resultArr = [];
    for (let i = 0;i <= indices.length - 1;i++){
        let temp = indices.indexOf(i);
        resultArr.push(s[temp])
    }
    return resultArr.join("");
};