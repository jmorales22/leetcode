function countPrimes(n) {
    let count = 0;
     for (let i = 1; i < n; i++) {
        if (isPrime(i)) count++;
     }
     return count;
   }
   
   function isPrime(num) {
     if (num <= 1) return false;
     // Loop's ending condition is i * i <= num instead of i <= sqrt(num)
     // to avoid repeatedly calling an expensive function sqrt().
     for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
     }
     return true;
   }

   
//Another way to solve it
   var countPrimes = function(n) {
    if(n <=2) return 0;
    
    // first create an array with the same length of n filled with all 'true's
    let arr = []
    for(let i = 0; i < n; i++) {
        arr.push(true)
    }
    
    // implement the Sieve of Eratosthenes algo here (link is provided below)
    // at each iteration, if an element is true (which initially they all are), flip all the multiples of that number to false
    
    for(let i = 2;  i <= Math.floor(Math.sqrt(n)); i++) {
        if(arr[i]) {
            for(let j = i; j * i < arr.length; j++ ) {
                arr[i * j] = false
            }
        }
    }
    
    // only count the remaining elements that are still true
    
    let counter = 0;    
    for(let i = 2; i < arr.length; i ++) {
       if(arr[i]) counter ++
    }
  return counter
};