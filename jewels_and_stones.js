var numJewelsInStones = function (J, S) {
    let count = 0;
  
    for (let i = 0; i < S.length; i++) {
      [...J].forEach((letter) => {
        if (S[i] === letter) {
          count++;
        }
      });
    }
    return count;
  };