var isPalindrome = function(s) {
    if (s === "") return true;

    const newString = s.split(' ').join('').toLowerCase();

    let str = s.toLowerCase().replace(/\W/g,'');
  
    const reverseString = newString.split('').reverse().join('');
    console.log(newString)
    console.log(reverseString)
  };
  




